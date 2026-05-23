# Learning Arcade Brand Guidelines

This document outlines the visual brand identity for the **Learning Arcade**, including colors, typography, assets, and design principles.

---

## Brand Assets

### Logo
The primary logo is located at `public/assets/logo.png`. It represents the vibrant and playful nature of the learning arcade.

### Mascot
Our learning guide and mascot is **Nova**.
* **Name**: Nova - your Learning Arcade guide
* **Asset Location**: `public/assets/robot.png`
* **Description**: A friendly, futuristic learning assistant robot who guides students through challenges, celebrates achievements, and makes educational games feel like an epic quest.

---

## Brand Palette

### Primary & Accent Colors
Use these vibrant colors to create an engaging, gamified interface.

| Color Name | Hex Code | Visual Preview | Use Case / Association |
| :--- | :--- | :---: | :--- |
| **Deep Navy** | `#071B52` | ![](https://via.placeholder.com/15/071B52/000000?text=+) | Primary brand color, headers, strong highlights |
| **Arcade Blue** | `#2F63FF` | ![](https://via.placeholder.com/15/2F63FF/000000?text=+) | Primary buttons, link states, Maths theme |
| **Electric Purple** | `#7A4DFF` | ![](https://via.placeholder.com/15/7A4DFF/000000?text=+) | Primary accents, interactive highlights |
| **Magenta Pink** | `#F53FA1` | ![](https://via.placeholder.com/15/F53FA1/000000?text=+) | UI highlights, English Epic theme |
| **Sunset Orange** | `#FF7A3D` | ![](https://via.placeholder.com/15/FF7A3D/000000?text=+) | Accent details, Tools/Admin theme |
| **Golden Yellow** | `#FFBE33` | ![](https://via.placeholder.com/15/FFBE33/000000?text=+) | Warning states, stars, notifications, rewards |
| **Cyan Teal** | `#18C7D8` | ![](https://via.placeholder.com/15/18C7D8/000000?text=+) | Science Spark theme |
| **Soft Aqua** | `#7BE3E3` | ![](https://via.placeholder.com/15/7BE3E3/000000?text=+) | Background highlights, accent overlays |
| **Lavender** | `#B58DFF` | ![](https://via.placeholder.com/15/B58DFF/000000?text=+) | Secondary category states, History Heroes |

### Supporting Neutrals

| Neutral Name | Hex Code | Visual Preview | Use Case |
| :--- | :--- | :---: | :--- |
| **Background Ice** | `#EEF5FA` | ![](https://via.placeholder.com/15/EEF5FA/000000?text=+) | Main page background |
| **Soft Card White** | `#FFFFFF` | ![](https://via.placeholder.com/15/FFFFFF/000000?text=+) | Game cards, interactive blocks |
| **Light Grey UI** | `#E9EDF5` | ![](https://via.placeholder.com/15/E9EDF5/000000?text=+) | Input borders, inactive buttons, subtle dividers |
| **Mid Grey Text** | `#667085` | ![](https://via.placeholder.com/15/667085/000000?text=+) | Body copy, secondary text |

### Dark-Mode Background

| Color Name | Hex Code | Visual Preview | Use Case |
| :--- | :--- | :---: | :--- |
| **Midnight Navy** | `#041033` | ![](https://via.placeholder.com/15/041033/000000?text=+) | Dark mode page background |

---

## Brand Gradients

### Arcade Primary Gradient
Used for prominent "Arcade" titles, main call-to-actions, and premium button backgrounds:

```css
background: linear-gradient(
  90deg,
  #2F63FF 0%,
  #7A4DFF 35%,
  #F53FA1 70%,
  #FF7A3D 100%
);
```

---

## Typography & Styling Principles

1. **Font**: The primary font is **Fredoka** (sans-serif) or **Outfit** to maintain a playful, friendly, and soft-cornered aesthetic.
2. **Component Corners**: Use large border-radii (`3xl`, i.e., `1.5rem` or `24px`) to match the soft-cornered arcade vibe.
3. **Elevations**: Use glowing drop shadows, subtle border highlights, and CSS backdrop blurs for a premium, modern feel.
