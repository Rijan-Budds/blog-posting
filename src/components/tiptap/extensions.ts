import { Mark, mergeAttributes } from '@tiptap/core';

// Font Size
export const FontSize = Mark.create({
    name: 'fontSize',
    addAttributes() {
        return {
            size: {
                default: null,
                parseHTML: element => element.style.fontSize,
                renderHTML: attributes => {
                    if (!attributes.size) return {};
                    return { style: `font-size: ${attributes.size}` };
                },
            },
        };
    },
    parseHTML() {
        return [{ tag: 'span[style]' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setFontSize:
                size =>
                    ({ commands }) => {
                        return commands.setMark(this.name, { size });
                    },
            unsetFontSize:
                () =>
                    ({ commands }) => commands.unsetMark(this.name),
        };
    },
});

// Font Family
export const FontFamily = Mark.create({
    name: 'fontFamily',
    addAttributes() {
        return {
            family: {
                default: null,
                parseHTML: element => element.style.fontFamily,
                renderHTML: attributes => {
                    if (!attributes.family) return {};
                    return { style: `font-family: ${attributes.family}` };
                },
            },
        };
    },
    parseHTML() {
        return [{ tag: 'span[style]' }];
    },
    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(HTMLAttributes), 0];
    },
    addCommands() {
        return {
            setFontFamily:
                family =>
                    ({ commands }) => {
                        return commands.setMark(this.name, { family });
                    },
            unsetFontFamily:
                () =>
                    ({ commands }) => commands.unsetMark(this.name),
        };
    },
});
