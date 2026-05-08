/// <reference types="@figma/plugin-typings" />

// This is the main script for your Figma Plugin.
// To use this, you'll need to set up a basic Figma plugin environment.
// Load the screens.json array here (in a real plugin, you can fetch it or bundle it via webpack)

import screensData from './screens.json';

async function generateScreens(screens: any[]) {
  // Load standard fonts first to ensure text can be created
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  let currentX = 0; // Space out the screens horizontally

  for (const screen of screens) {
    // 1. Create the Main Frame (Screen)
    const frame = figma.createFrame();
    frame.name = screen.name;
    frame.resize(screen.width || 1440, screen.height || 1024);
    frame.x = currentX;
    frame.y = 0;
    
    // Set background color
    if (screen.backgroundColor) {
      frame.fills = [{ type: 'SOLID', color: hexToRgb(screen.backgroundColor) }];
    }

    // 2. Iterate through children and render them
    if (screen.children) {
      renderChildren(frame, screen.children);
    }

    // Add to Figma document
    figma.currentPage.appendChild(frame);
    
    // Move X coordinate for the next screen
    currentX += frame.width + 200; 
  }

  // Focus the viewport on the generated screens
  figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
  figma.closePlugin("✅ UI Prototype successfully generated!");
}

// Recursive function to build nested structures
function renderChildren(parent: FrameNode, children: any[]) {
  for (const childNode of children) {
    if (childNode.type === "FRAME") {
      const el = figma.createFrame();
      el.name = childNode.name || "Frame";
      if (childNode.width && childNode.height) el.resize(childNode.width, childNode.height);
      if (childNode.x !== undefined) el.x = childNode.x;
      if (childNode.y !== undefined) el.y = childNode.y;
      
      // Styling
      if (childNode.backgroundColor) {
        el.fills = [{ type: 'SOLID', color: hexToRgb(childNode.backgroundColor) }];
      }
      if (childNode.cornerRadius) el.cornerRadius = childNode.cornerRadius;
      
      // Auto layout (Flexbox)
      if (childNode.layoutMode) {
        el.layoutMode = childNode.layoutMode;
        el.itemSpacing = childNode.itemSpacing || 0;
      }

      parent.appendChild(el);

      // Render grandchildren
      if (childNode.children) {
        renderChildren(el, childNode.children);
      }
    } 
    else if (childNode.type === "TEXT") {
      const el = figma.createText();
      el.name = childNode.name || childNode.content.substring(0, 10);
      
      // Set font weight
      el.fontName = { family: "Inter", style: childNode.fontWeight === "Bold" ? "Bold" : "Regular" };
      el.characters = childNode.content;
      
      if (childNode.fontSize) el.fontSize = childNode.fontSize;
      if (childNode.x !== undefined) el.x = childNode.x;
      if (childNode.y !== undefined) el.y = childNode.y;
      
      if (childNode.color) {
        el.fills = [{ type: 'SOLID', color: hexToRgb(childNode.color) }];
      }

      parent.appendChild(el);
    }
  }
}

// Utility: Convert HEX string (e.g. "#FFFFFF") to Figma RGB (0-1 format)
function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) / 255,
    g: ((num >> 8) & 255) / 255,
    b: (num & 255) / 255
  };
}

// Kick off generation
generateScreens(screensData);
