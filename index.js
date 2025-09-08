#!/usr/bin/env node
import * as p from "@clack/prompts";
import color from "picocolors";
import fs from "fs";
import path from "path";
import { execa } from "execa";
import { promisify } from "util";
import { rimraf } from "rimraf";

// Promisify fs functions
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

// Available templates
const TEMPLATES = [
  { value: "express-backend", label: "Backend(Express.js)" },
  // { value: 'backend-django', label: 'Backend(Django)' },
  { value: "vite-dashboard-template", label: "Dashboard with Credentials Auth(Vite + React)" },
  { value: "portfolio-template", label: "Developer Portfolio(Vite + React)" },
  // { value: "nextjs", label: "Frontend(Next.js)" },
];

async function main() {
  console.clear();
  console.log(
    color.cyan(`		 
            :::     ::::    ::: ::::::::: :::::::::: ::::    ::: :::::::::     :::  
         :+: :+:   :+:+:   :+:      :+:  :+:        :+:+:   :+:      :+:    :+: :+: 
       +:+   +:+  :+:+:+  +:+     +:+   +:+        :+:+:+  +:+     +:+    +:+   +:+ 
     +#++:++#++: +#+ +:+ +#+    +#+    +#++:++#   +#+ +:+ +#+    +#+    +#++:++#++: 
    +#+     +#+ +#+  +#+#+#   +#+     +#+        +#+  +#+#+#   +#+     +#+     +#+  
   #+#     #+# #+#   #+#+#  #+#      #+#        #+#   #+#+#  #+#      #+#     #+#   
  ###     ### ###    #### ######### ########## ###    #### ######### ###     ### 
`)
  );

  p.updateSettings({
    aliases: {
      w: "up",
      s: "down",
      a: "left",
      d: "right",
    },
  });

  p.intro(
    `${color.bgCyan(
      color.black(" Starter projects for different templates. ")
    )}`
  );
  const s = p.spinner();

  // Constants
  const TEMP_DIR = ".temp-clone";

  const project = await p.group(
    {
      name: () =>
        p.text({
          message: "What is the name of your project?",
          placeholder: "project-name",
          validate: (value) => {
            if (!value) return "Please enter a project name.";
          },
        }),
      type: ({ results }) =>
        p.select({
          message: `Pick a template for "${results.name}"`,
          initialValue: "vite-dashboard-template",
          maxItems: 1,
          options: TEMPLATES,
        }),
      install: () =>
        p.confirm({
          message: "Install dependencies?",
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  // Check if directory already exists
  s.start(`Setting up React project: ${project.name}`);
  try {
    await access(project.name);
    console.error(`Error: Directory "${project.name}" already exists.`);
    s.stop("❌ Directory already exists.");
    process.exit(1);
  } catch {
    // Directory doesn't exist, we can proceed
  }
  //get repo url
  switch (project.type) {
    case "express-backend":
      project.repoUrl = "https://github.com/mpiers110/express-backend-template";
      break;
    case "vite-dashboard-template":
      project.repoUrl = "https://github.com/mpiers110/dashboard-template";
      break;
    case "portfolio-template":
      project.repoUrl = "https://github.com/mpiers110/portfolio-website";
      break;

    default:
      project.repoUrl = "https://github.com/mpiers110/dashboard-template";
      break;
    
  }

  try {
    // Create project directory
    await mkdir(project.name);
    await mkdir(TEMP_DIR);
    s.message(`Created project directory: ${project.name}`);
    // Clone repo (using degit for simpler cloning without git history)
    s.message(`Downloading ${project.type} template...`);

    //clone repo from project.repoUrl
    await execa(
      "git",
      [
        "clone",
        "--branch",
        "master",
        "--single-branch",
        project.repoUrl,
        TEMP_DIR,
      ]
      //   { stdio: 'inherit' }
    );
    // Move files to project directory
    const files = fs.readdirSync(TEMP_DIR);
    for (const file of files) {
      if (file === ".git") continue; // Skip .git directory
      fs.renameSync(path.join(TEMP_DIR, file), path.join(project.name, file));
    }

    // Cleanup temp directory
    rimraf.sync(TEMP_DIR);
    s.stop(
      `${project.name} initialized with ${project.type} template successfully`
    );
  } catch (e) {
    console.error(e);
    s.stop("❌ Error downloading template");
    process.exit(1);
  }

  if (project.install) {
    // Install dependencies
    try {
      process.chdir(project.name);
      s.start("Installing dependencies via pnpm");
      await execa("pnpm", ["install"]);
      s.stop("Dependencies installed with pnpm");
    } catch (e) {
      console.error(e);
      s.stop("❌ Error installing dependencies");
      process.exit(1);
    }
  }

  const nextSteps = `cd ${project.name}        \n${
    project.install ? "" : "pnpm install\n"
  }pnpm run dev`;

  p.note(nextSteps, "Next steps.");

  p.outro(
    `Report bugs or feature requests at ${color.underline(
      color.cyan("https://github.com/mpiers110/anzenza/issues")
    )}`
  );
}

main().catch(console.error);
