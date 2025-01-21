# ✨ Tinkerbell Custom Cursor

## 🌟 Project Overview
This project replaces the default mouse cursor with a magical **Tinkerbell cursor**, adding a whimsical and interactive experience to the webpage. The custom cursor animates to follow the mouse pointer smoothly, creating the illusion of Tinkerbell fluttering across the screen. 

The project showcases skills in **HTML**, **CSS**, and **JavaScript**, with a focus on creating custom UI interactions and animations.

---

## 💻 Features
1. **Custom Tinkerbell Cursor**:
   - The default cursor is hidden and replaced by a fixed-position Tinkerbell GIF.
   - Smooth animations make the cursor follow the mouse pointer with a natural delay.
   - The Tinkerbell GIF rotates to face the movement direction.

2. **Performance Optimization**:
   - The `script.js` file uses the `defer` attribute to avoid blocking the HTML parsing.
   - Lightweight animations and efficient JavaScript ensure smooth performance.

3. **Scalable Design**:
   - Easily adaptable for different GIFs or images.
   - Customization options for cursor size, animation speed, and glow effects.

---

## 💫 How It Works

### **HTML**  
The `index.html` file lays down the foundation for our fairy-tale cursor. We’ve added a nice little performance boost with the `defer` attribute to load the script after the HTML content is ready—so no waiting for Tinkerbell to finish her dance. 🧚‍♀️

### **CSS**  
The `styles.css` takes care of the fun stuff:
- **Hides the default cursor** (goodbye, plain pointer!)
- **Adds Tinkerbell as the custom cursor** with the magic of `background-image`.
- **Uses `pointer-events: none`** to ensure that Tinkerbell won’t interfere with your clicks—she’s a curious fairy, but she knows when to stay out of the way! ✨

### **JavaScript**  
The `script.js` file adds the magic movement:
- **Smoothly follows the mouse** with a soft animation—think of it as Tinkerbell gliding through the air.
- **Uses trigonometry** to calculate the angle and rotate Tinkerbell so she’s always facing the right direction.
- The magic happens in real-time as your mouse moves, creating a fluid experience that’s both interactive and delightful. 🌟

---

### **Creating the Magical Cursor**  
We start by making a brand-new cursor element in JavaScript. With a little bit of magic (and some code), we add the Tinkerbell GIF as the background image to create the custom cursor. Once it’s in place, it follows your mouse and gives you a sparkly magical journey. ✨

### **Following the Mouse**  
The cursor listens to your mouse movements and follows them smoothly across the page. We calculate how far the cursor needs to move and then animate it towards the mouse position, giving it a magical delay as it follows your every move. 🧚‍♀️

### **Making Tinkerbell Rotate**  
Tinkerbell always faces the direction you’re moving in—like she’s guiding you through your enchanted website! The rotation happens thanks to a little bit of trigonometry magic, calculating the angle between your current mouse position and the new one.

---

## 🚀 Getting Started
Ready to sprinkle some magic on your website? 🧚‍♀️✨ Here’s how you can do it:

### 1. Clone the Repository
```bash
git clone https://github.com/TeaC0de/CustomCursor.git
````

### 2. Open the Project

Simply open the `index.html` in your browser and watch as Tinkerbell starts fluttering behind your mouse! 🪄

---

## 🔧 Customization
Feel free to cast your own magic and customize the cursor to your heart’s content! ✨

### **Change the Cursor Image**:
You can replace Tinkerbell with any other magical creature or image you like. Just update the `background-image` property in `styles.css`:
```bash
background-image: url('your-image-url.gif');  // Replace with your custom image //
````
✨ Tip: Make sure your custom image is in a compatible format (e.g., .gif, .png, .svg) and the correct size for your design.

### **Adjust the Cursor Size**:
Need a bigger cursor? Or a tiny one, like a tiny fairy? Modify the `width` and `height` in `.custom-cursor`:
```bash
width: 100px;  // Resize the cursor //
height: 100px;
````
🎨 Play around with the size to find what fits best with your website’s design.

### **Tweak the Animation Speed**:
Make Tinkerbell move faster or slower by adjusting the `speed` factor in `script.js`:
```bash
const speed = 0.1;  // Faster movement //
````
⚡ Lower values make the cursor follow your mouse more slowly, while higher values speed up the animation.

---

## 🧚‍♀️ Assets Used
### **Tinkerbell GIF:**
The magic GIF used for the cursor is provided by [PNW Mouse Meet](https://pnwmousemeet.com).
<div align="center">
  <img src="https://pnwmousemeet.com/wp-content/themes/pnwmousemeet/dist/images/tinkerbell.gif" alt="Tinkerbell GIF" width="200" height="200" />
</div>

---

## ✨ Future Magical Enhancements
1. **Add Glowing & Sparkling Effects:**
   Imagine Tinkerbell glowing and leaving a trail of sparkles wherever she flies—pure magic! ✨

2. **Mobile Compatibility:**
   Right now, the cursor works best on desktops. In the future, we could make it mobile-friendly, perhaps with a touch-friendly fairy dust effect. 🌟

3. **Even More Customization:**
   We could allow users to pick their own magical creature or cursor effect, making it even more customizable! 🧚‍♂️

---

## 🏆 What I Learned

- Replacing the default cursor with a custom one is a fun and easy way to add interactivity.

- Using JavaScript to smoothly animate elements with requestAnimationFrame results in smooth and optimized performance.

- Calculating angles with trigonometry might not sound magical, but it’s an incredibly useful skill for making animations feel natural and dynamic! ✨

  ---

  ## 🙌 Acknowledgments

- Huge thanks to [PNW Mouse Meet](https://pnwmousemeet.com) for the beautiful Tinkerbell GIF! 🧚‍♀️

- Inspiration for the animation techniques came from various online resources—special shoutout to all the developers who made animation tutorials so accessible! 💫

  ---

  ## 📜 License

- This project is open-source, licensed under the [MIT License](https://github.com/TeaC0de/License/blob/main/LICENSE).
Feel free to fork it, modify it, or use it in your own magical creations! ✨






















