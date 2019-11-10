figma.showUI(__html__);

const URL = 'https://figma-doom.possan.se/';

figma.ui.onmessage = msg => {
    if (msg.type === 'boom') {
        figma.ui.resize(320 + 15, 200 + 20);
        figma.ui.postMessage({type:'open', url:URL});
    }
};
