"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { FontSize, FontFamily } from "./tiptap/extensions";

export default function BlogEditor({ value, onChange }: { value: string; onChange: (content: string) => void }) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
            TextStyle,
            Color,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Link,
            Image,
            FontSize,
            FontFamily,
        ],
        content: value || "<p>Start writing...</p>",
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
        immediatelyRender: false, // avoids SSR issues
    });

    if (!editor) return null;

    return (
        <div className="border rounded p-2 min-h-[400px]">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mb-2">
                {/* Basic styling */}
                <button onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()}>I</button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()}>S</button>

                {/* Alignment */}
                <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>Left</button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center</button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>Right</button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>Justify</button>

                {/* Font size */}
                <select onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()} defaultValue="">
                    <option value="" disabled>Font Size</option>
                    <option value="12px">12</option>
                    <option value="14px">14</option>
                    <option value="16px">16</option>
                    <option value="18px">18</option>
                    <option value="20px">20</option>
                    <option value="24px">24</option>
                    <option value="32px">32</option>
                </select>

                {/* Font family */}
                <select onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()} defaultValue="">
                    <option value="" disabled>Font Family</option>
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                </select>

                {/* Color */}
                <input type="color" onChange={(e) => editor.chain().focus().setColor(e.target.value).run()} />

                {/* Links */}
                <button
                    onClick={() => {
                        const url = prompt("Enter link URL");
                        if (url) editor.chain().focus().toggleLink({ href: url }).run();
                    }}
                >
                    Link
                </button>

                {/* Images */}
                <button
                    onClick={() => {
                        const url = prompt("Enter image URL");
                        if (url) editor.chain().focus().setImage({ src: url }).run();
                    }}
                >
                    Image
                </button>
            </div>

            {/* Editor area */}
            <EditorContent editor={editor} />
        </div>
    );
}
