document.addEventListener('DOMContentLoaded', () => {

    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');

    const initialMarkdown = `



# Welcome to Markdown Previewer

## This is a sub-heading

### And here's some other cool stuff;

\`<div> </div>\'

\`\`\
// this is multi-line code:

function anotherExample(firstLine, lastLine){
if(firstLine === '```' && lastLine === '```') {   

return multiLineCode;
}

}

\`\`\`


**Bold text**

_Italic text_

**_Bold and Italic text_**

~~Strikethrough~~

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item


> Block Quotes!

![Image] (https://via.placeHolder.com/150)

![link](https://www.example.com)

`;

    editor.value = initialMarkdown;
    preview.innerHTML = marked.parse(initialMarkdown);

    editor.addEventListener('input', (e) => {

        const markdownText = e.target.value;
        preview.innerHTML = marked.parse(markdownText);
    });




});