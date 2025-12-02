# Adding and Removing Artists - Complete Guide

This guide walks you through the process of adding a new artist to the website and removing an existing one.

---

## Adding a New Artist

### Step 1: Update the Navbar JavaScript File

1. Open `assets/js/navbar.js`
2. Find the `NAVBAR_ARTISTS` array at the top of the file (around line 3)
3. Add a new entry for your artist in the following format:
   ```javascript
   { name: "Artist Name", file: "artist-name.html" },
   ```
   
   **Example:**
   ```javascript
   const NAVBAR_ARTISTS = [
     { name: "Nathan Mickle", file: "nathan-mickle.html" },
     { name: "Bubba Irwin", file: "bubba-irwin.html" },
     { name: "New Artist", file: "new-artist.html" },  // ← Add your new artist here
   ];
   ```
   
   **Important Notes:**
   - The `name` field is what will appear in the dropdown menu
   - The `file` field must match the HTML filename you'll create (use lowercase with hyphens)
   - Keep the array in alphabetical order if desired (optional)

### Step 2: Create the Artist HTML File

1. Copy `artists/tex.html` as your template
2. Create a new file in the `artists/` folder named `[artist-name].html` (match the filename from Step 1)
3. Open the new file and make the following changes:

   **a) Update the Artist Name (around line 98-100):**
   ```html
   <h1 class="text-decoration-underline d-inline fs-3 fs-md-4">
     ARTIST NAME
   </h1>
   ```

   **b) Update the Bio (around line 102-117):**
   ```html
   <p class="mt-3 text-center">
     Your artist bio text goes here...
     <br /><br />
     More paragraphs as needed...
   </p>
   ```

   **c) Update Social Media Links (around line 118-139):**
   
   - **BOOK NOW button**: If the artist has a booking link, uncomment and update:
     ```html
     <a
       href="mailto:booking@example.com"
       class="btn btn-light mx-2 px-2 align-middle shadow"
     >
       BOOK NOW
     </a>
     ```
     If they don't have booking, leave it commented out (wrapped in `<!-- -->`)
   
   - **Instagram button**: Always update with the artist's Instagram URL:
     ```html
     <a
       href="https://www.instagram.com/artist_handle/"
       class="btn btn-light mx-2 px-2 align-middle shadow"
     >
       Instagram
     </a>
     ```
   
   - **Facebook button**: If the artist has Facebook, uncomment and update:
     ```html
     <a
       href="https://www.facebook.com/artist_page/"
       class="btn btn-light mx-2 px-2 align-middle shadow"
     >
       Facebook
     </a>
     ```
     If they don't have Facebook, leave it commented out

   **d) Update Image Paths (around line 148-280):**
   
   Replace all instances of `tex` with your artist's folder name in the image paths:
   
   - Find: `../assets/img/tex/`
   - Replace: `../assets/img/[artist-folder-name]/`
   
   **Example:**
   ```html
   <!-- Change from: -->
   data-bp="../assets/img/tex/1.webp"
   src="../assets/img/tex/1.webp"
   
   <!-- To: -->
   data-bp="../assets/img/newartist/1.webp"
   src="../assets/img/newartist/1.webp"
   ```
   
   Do this for all 11 image references (1.webp through 11.webp)

### Step 3: Create the Image Folder

1. Create a new folder in `assets/img/` named after your artist (use lowercase, no spaces)
   - Example: `assets/img/newartist/`
2. This folder will hold all the artist's portfolio images

### Step 4: Add and Name Images

1. Add your artist's portfolio images to the folder you just created
2. **Rename all images** to follow this naming convention:
   - `1.webp`
   - `2.webp`
   - `3.webp`
   - ... (continue up to `11.webp` or however many images you have)
   
   **Important:**
   - Images should be in `.webp` format
   - Use sequential numbering starting from `1`
   - The HTML template expects up to 11 images (div1 through div11)
   - If you have fewer than 11 images, the extra divs will show broken images (you can remove those divs from the HTML if desired)

### Step 5: Verify Everything Works

1. Open the website in a browser
2. Navigate to the Artists/Booking dropdown in the navbar
3. Click on your new artist's name
4. Verify:
   - The artist page loads correctly
   - The artist name and bio display properly
   - Social media buttons work (if enabled)
   - All images display correctly in the grid
   - Images open in the lightbox when clicked

---

## Removing an Artist

### Step 1: Remove from Navbar JavaScript

1. Open `assets/js/navbar.js`
2. Find the `NAVBAR_ARTISTS` array
3. **Delete** the line containing the artist you want to remove
   
   **Example:**
   ```javascript
   // Before:
   const NAVBAR_ARTISTS = [
     { name: "Nathan Mickle", file: "nathan-mickle.html" },
     { name: "Artist to Remove", file: "artist-to-remove.html" },  // ← Delete this line
     { name: "Bubba Irwin", file: "bubba-irwin.html" },
   ];
   
   // After:
   const NAVBAR_ARTISTS = [
     { name: "Nathan Mickle", file: "nathan-mickle.html" },
     { name: "Bubba Irwin", file: "bubba-irwin.html" },
   ];
   ```

### Step 2: Delete the Artist HTML File

1. Navigate to the `artists/` folder
2. **Delete** the HTML file for the artist (e.g., `artist-to-remove.html`)

### Step 3: Delete the Image Folder

1. Navigate to `assets/img/`
2. **Delete** the entire folder for the artist (e.g., `assets/img/artist-to-remove/`)

### Step 4: Verify Removal

1. Refresh the website
2. Check the Artists/Booking dropdown - the removed artist should no longer appear
3. If you try to access the artist's page directly via URL, it should return a 404 (page not found)

---

## Quick Reference Checklist

### Adding an Artist:
- [ ] Added entry to `NAVBAR_ARTISTS` array in `assets/js/navbar.js`
- [ ] Copied `artists/tex.html` to create new artist HTML file
- [ ] Updated artist name in HTML
- [ ] Updated bio in HTML
- [ ] Updated/enabled social media links (Instagram, Facebook, Booking)
- [ ] Updated all image paths from `tex` to new artist folder name
- [ ] Created image folder in `assets/img/`
- [ ] Added and renamed images to `1.webp`, `2.webp`, etc.
- [ ] Tested the page in browser

### Removing an Artist:
- [ ] Removed entry from `NAVBAR_ARTISTS` array in `assets/js/navbar.js`
- [ ] Deleted artist HTML file from `artists/` folder
- [ ] Deleted artist image folder from `assets/img/`
- [ ] Verified removal in browser

---

## Notes

- **File Naming Convention**: Use lowercase with hyphens for HTML filenames (e.g., `john-doe.html`)
- **Image Format**: All images should be `.webp` format for optimal performance
- **Image Count**: The template supports up to 11 images. If you have fewer, you can remove the extra `<div class="grid-item divX">` elements from the HTML
- **Social Media**: Always include Instagram. Booking and Facebook are optional - comment them out if not available
- **Path Consistency**: Make sure the folder name in `assets/img/` matches what you use in the HTML image paths

---

## Troubleshooting

**Artist doesn't appear in dropdown:**
- Check that the entry in `navbar.js` is correctly formatted (comma, quotes, etc.)
- Verify the filename matches between the array and the actual HTML file

**Images don't display:**
- Verify image paths in HTML match the actual folder name
- Check that images are named correctly (`1.webp`, `2.webp`, etc.)
- Ensure images are in `.webp` format

**Page doesn't load:**
- Check that the HTML filename matches the filename in `navbar.js`
- Verify the file is in the `artists/` folder


