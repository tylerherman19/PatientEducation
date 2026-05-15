# Patient Education Generator

A simple, branded one-page handout maker for clinic staff. No installs, no
accounts, no patient data. It runs entirely in the browser.

---

## 1. What this app does

This app helps clinic staff create a polished, branded patient education
handout in a few clicks:

1. Pick a clinic location.
2. Pick a diagnosis (Jaw Pain / TMJ / TMD, Migraines, Tension Headaches,
   Sleep Apnea & Oral Appliance Therapy, Chronic Facial Pain).
3. Pick a handout type (General Overview, Self-Care Instructions, After
   First Appointment, Home Care Focus).
4. Click **Generate One-Pager** to preview it on screen.
5. Click **Export to Word (.docx)** to download an editable Word file,
   or **Print** to print it on letter paper.

It also warns if the chosen handout looks like it will not fit on a single
page.

No patient information is collected, sent, or stored. The app makes no
calls to any server, AI service, or database. Everything happens in your
own browser.

---

## 2. How to use it

You have two ways to run it:

**On the web (recommended).** Once published on GitHub Pages (see section 6),
you and your staff just visit the public URL in any modern browser.

**On your own computer (no internet needed except the first time).**
Double-click `index.html`. It will open in your default browser.

> Note: when you open `index.html` directly from a folder, some browsers
> block the Word export because of local-file security rules. If Export to
> Word does not work locally, use the GitHub Pages URL instead. Preview
> and Print always work locally.

To make a handout:

1. Pick a clinic, a diagnosis, and a handout type in the left panel.
2. Click **Generate One-Pager**. The handout appears on the right.
3. Click **Export to Word (.docx)** to download an editable file you can
   tweak in Word, or click **Print** to send it to your printer.

If you see a yellow **Warning: This handout may not fit on one page**
banner, the content is a little too long for one page. You can still
export or print. To get it on one page, shorten the content in
`content.js` (see section 5).

---

## 3. Where to put the letterhead logo

The app looks for the letterhead logo at this exact path:

```
assets/letterhead_logo.png
```

To add your real logo:

1. Open the GitHub repository in your browser.
2. Click into the `assets/` folder.
3. Click **Add file → Upload files**.
4. Drag your logo file in. It **must be named** `letterhead_logo.png` (all
   lowercase, PNG format). If your file is a JPG or has a different name,
   rename it to `letterhead_logo.png` first.
5. Scroll down, click **Commit changes**.

Recommended logo: a transparent-background PNG, roughly 1200 × 300 pixels.
A wider, shorter logo looks best in the letterhead area.

If the logo file is missing or fails to load:

- The preview will show a small broken-image icon.
- The Word export will quietly skip the image and still produce a clean
  document.

### Optional: storing the original Word letterhead

If you want to keep the original `.docx` letterhead file around for
reference, you can save it at:

```
assets/reference/Letterhead.docx
```

The running app does **not** use this file — it only uses
`assets/letterhead_logo.png` and the address fields in `content.js`. The
reference folder is just a safe place to keep the original.

---

## 4. How to update clinic locations

Clinic info lives in `content.js`, near the top, in the `CLINICS` array.
You will see five entries that look like this:

```js
{
  id: "clinic1",
  name: "Minnesota Head & Neck Pain Clinic - Location 1",
  address: "ADDRESS LINE HERE",
  cityStateZip: "CITY, STATE ZIP HERE",
  phone: "PHONE HERE",
  website: "WWW.MHNPC.COM"
},
```

To update a clinic:

1. Open `content.js` in any text editor (or click it on GitHub and press
   the pencil icon to edit in the browser).
2. Replace `ADDRESS LINE HERE`, `CITY, STATE ZIP HERE`, and `PHONE HERE`
   with the real values.
3. Update the `name` field if needed.
4. Save the file (on GitHub, click **Commit changes**).

You can have as few or as many clinics as you like — just keep the same
shape (`id`, `name`, `address`, `cityStateZip`, `phone`, `website`) and
make sure each `id` is unique.

---

## 5. How to add or edit a diagnosis

All patient education content lives in `content.js` in the `CONTENT`
object. Each diagnosis has this shape:

```js
diagnosis_key: {
  id: "diagnosis_key",
  label: "Plain English Diagnosis Name",
  title: "Self-Care Guide for ...",
  variants: {
    general:           { intro: [...], tips: [...], whenToCall: [...], closing: "..." },
    selfCare:          { intro: [...], tips: [...], whenToCall: [...], closing: "..." },
    firstAppointment:  { intro: [...], tips: [...], whenToCall: [...], closing: "..." },
    homeCare:          { intro: [...], tips: [...], whenToCall: [...], closing: "..." }
  }
}
```

- `intro` is an array of short paragraphs (aim for 2, total under ~90 words).
- `tips` is an array of `{ heading, body }` objects. Aim for 7 to 9 tips.
  Each `body` should be 35 to 55 words.
- `whenToCall` is an array of short sentences (4 to 6 work well).
- `closing` is one short, reassuring sentence.

To **edit** an existing diagnosis, just change the words. Keep the
structure the same.

To **add a new diagnosis**, copy an existing block (for example,
`tmd_tmj`), give it a new key (like `cluster_headaches`), and fill in the
content. It will appear in the **Select Diagnosis** dropdown automatically.

Writing tips (these match the rest of the handouts):

- Aim for 5th-grade reading level.
- Short sentences. Plain English.
- Use "you" and "your."
- No medical jargon. If you must use a term, explain it right after.
- No guarantees ("this will cure you"), no alarming language.
- No patient-specific advice.

If your handout overflows, the yellow warning banner will appear. Trim a
sentence or two and re-generate.

---

## 6. How to publish on GitHub Pages

GitHub Pages will host this app at a public URL for free. Here is the
click path:

1. Push or merge your changes to the `main` branch of the repository.
2. On GitHub, go to the repository page.
3. Click **Settings** (top tabs).
4. In the left sidebar, click **Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Under **Branch**, pick **main** and **/ (root)**. Click **Save**.
7. Wait about a minute. Refresh the Pages settings screen.
8. A green box will appear that says something like:
   *Your site is live at https://YOUR-USERNAME.github.io/REPO-NAME/*
9. That is your public link. Share it with clinic staff.

Any time you commit a change to `main` (new clinic addresses, new logo,
edited content), GitHub Pages will automatically redeploy within a minute
or so. No build step, no other setup.

---

## File map

```
index.html                    # the app itself - open this in a browser
content.js                    # all clinic info and patient education content
README.md                     # this file
assets/
  letterhead_logo.png         # YOUR clinic logo goes here (PNG)
  reference/
    Letterhead.docx           # optional - original letterhead file (not used by app)
```

That's it. No installs, no npm, no React, no build tools. Just open
`index.html` or visit the GitHub Pages URL.
