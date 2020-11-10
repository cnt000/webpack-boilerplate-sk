const exampleUtils = text => text.substring(0, 3);

const exampleUtilsDynamicImported = text => text.replace(/[a]/g, 'A').replace(/[b]/g, 'B');

export { exampleUtils, exampleUtilsDynamicImported };
