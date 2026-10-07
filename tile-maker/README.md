# Moving the Tile Maker to the company GitHub

Made 8 October 2026. This folder holds the Tile Maker: the web page the team uses to make the
1280 x 720 course images for Skilljar. These steps are for whoever looks after the company GitHub.
Nothing in Skilljar changes.

## What is in this folder

- **files to upload / tiles /**: the Tile Maker page (`index.html`). Everything it does runs in the
  browser: it draws the tile and downloads it as an image. Nothing is sent anywhere.
- **files to upload / assets /**: the Continuous and product logos, icons and page style it uses.

No passwords, no customer data.

## In the company GitHub (about 10 minutes)

1. In the company organisation on github.com, create a new repository, for example `tile-maker`.
2. In the new repository, choose **Add file**, then **Upload files**, drag in both folders from
   `files to upload` (`tiles` and `assets`), and choose **Commit changes**. Keep the two folders side
   by side: the page finds its logos in `assets`.
3. Go to **Settings**, then **Pages**. Under **Build and deployment**, set **Source** to
   **Deploy from a branch**, the branch to **main** and the folder to **/ (root)**, then **Save**.
4. After a few minutes the Pages screen shows the address, for example
   `https://orgname.github.io/tile-maker/`.
5. Check it: open that address followed by `tiles/`. The Tile Maker should open with the Continuous
   logo at the top and a tile in the preview.
6. Send the address to the education team.

The Tile Maker is only used by the team, so it can be limited to people signed in to the company
GitHub if the plan allows it.

## Good to know

- The menu at the top of the page also links to the other LMS toolkit pages (Home, Tagging guide,
  Uplift playbook, VisualCron Academy). Those pages are not in this kit, so those links will not open
  from the new address. The Tile Maker itself works without them.
- Updates: upload the changed `index.html` to the same place, replacing the old one.
