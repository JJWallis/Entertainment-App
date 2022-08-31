// What if I have a function that will help me accomplish some goal for the project,
// not directly tied to a specific component?

// For example: this blog has multiple blog post categories, like React, CSS, and Animations.
//  I have some functions that help me sort the categories by the number of posts,
//  or get the formatted / "pretty" name for them. All that stuff lives in a category.helpers.js file,
// inside src/helpers.

// Sometimes, a function will start in a component-specific file (eg. FileViewer/FileViewer.helpers.js),
//  but I'll realize that I need it in multiple spots. It'll get moved over to src/helpers
