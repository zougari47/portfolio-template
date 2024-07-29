<h1 align="center">Portfolio Template</h1>

<div align="center"><img src="/src/assets/100lighthouse.png" align="center"></div>

<p align="center">Deploy your portfolio in 5 minutes with ease, built with <strong>Astro</strong> & <strong>TailwindCSS</strong>.</p>

<div align="center"><img src="/src/assets/screenshot.png" align="center"></div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Modify Template](#modify-template)
  - [Theme](#theme)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager) - v18.17.1 or v20.3.0 or higher. ( v19 is not supported.)
- Text editor - [VS Code](https://nodejs.org/en/download/package-manager) is good with the Official Astro extension.
- Terminal - Astro is accessed through its command-line interface
- [pnpm](https://pnpm.io)(or you can use npm/yarn)
- [Git](https://git-scm.com/downloads)

## Installation

1. Use the `Use this template` button on GitHub and create new repository.
2. Clone the repo:
   ```sh
   git clone https://github.com/yourUsername/yourRepoName.git
   ```
3. Navigate to the project directory:
   ```sh
   cd yourRepoName
   ```
4. Install dependencies:
   ```sh
   pnpm install
   ```
5. Start the development server:
   ```sh
   pnpm dev
   ```
   **PS:** Make sure your replace `yourRepoName` with your repository name.

## Modify Template

After you started the development server, you can navigate to [http://localhost:3000/portfolio-template](http://localhost:3000/portfolio-template) and start editing the `src/data.json` file with your personal details.

**PS:** You will learn how to remove **_/portfolio-template_** from the URL in the deplyment section.

### Theme

I used blue as the theme for the template, but you can experiment with the following colors if you prefer a different option. Copy the color you like and replace the `primary` value in the `tailwind.config.mjs`.

- ![Gray color](https://via.placeholder.com/20x20/6B7280/000000?text=) **Gray**

```js
{ 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB', 400: '#9CA3AF', 500: '#6B7280', 600: '#4B5563', 700: '#374151', 800: '#1F2937', 900: '#111827' }
```

- ![Red color](https://via.placeholder.com/20x20/F05252/000000?text=) **Red**

```js
{ 50: '#FDF2F2', 100: '#FDE8E8', 200: '#FBD5D5', 300: '#F8B4B4', 400: '#F98080', 500: '#F05252', 600: '#E02424', 700: '#C81E1E', 800: '#9B1C1C', 900: '#771D1D' }
```

- ![Yellow color](https://via.placeholder.com/20x20/C27803/000000?text=) **Yellow**

```js
{ 50: '#FDFDEA', 100: '#FDF6B2', 200: '#FCE96A', 300: '#FACA15', 400: '#E3A008', 500: '#C27803', 600: '#9F580A', 700: '#8E4B10', 800: '#723B13', 900: '#633112' }
```

- ![Green color](https://via.placeholder.com/20x20/0E9F6E/000000?text=) **Green**

```js
{ 50: '#F3FAF7', 100: '#DEF7EC', 200: '#BCF0DA', 300: '#84E1BC', 400: '#31C48D', 500: '#0E9F6E', 600: '#057A55', 700: '#046C4E', 800: '#03543F', 900: '#014737' }
```

- ![Blue color](https://via.placeholder.com/20x20/3F83F8/000000?text=) **Blue**

```js
{ 50: '#EBF5FF', 100: '#E1EFFE', 200: '#C3DDFD', 300: '#A4CAFE', 400: '#76A9FA', 500: '#3F83F8', 600: '#1C64F2', 700: '#1A56DB', 800: '#1E429F', 900: '#233876' }
```

- ![Indigo color](https://via.placeholder.com/20x20/6875F5/000000?text=) **Indigo**

```js
{ 50: '#F0F5FF', 100: '#E5EDFF', 200: '#CDDBFE', 300: '#B4C6FC', 400: '#8DA2FB', 500: '#6875F5', 600: '#5850EC', 700: '#5145CD', 800: '#42389D', 900: '#362F78' }
```

- ![Purple color](https://via.placeholder.com/20x20/9061F9/000000?text=) **Purple**

```js
{ 50: '#F6F5FF', 100: '#EDEBFE', 200: '#DCD7FE', 300: '#CABFFD', 400: '#AC94FA', 500: '#9061F9', 600: '#7E3AF2', 700: '#6C2BD9', 800: '#5521B5', 900: '#4A1D96' }
```

- ![Pink color](https://via.placeholder.com/20x20/E74694/000000?text=) **Pink**

```js
{ 50: '#FDF2F8', 100: '#FCE8F3', 200: '#FAD1E8', 300: '#F8B4D9', 400: '#F17EB8', 500: '#E74694', 600: '#D61F69', 700: '#BF125D', 800: '#99154B', 900: '#751A3D' }
```
