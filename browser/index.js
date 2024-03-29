import { generate } from '../lib/generator.js';
import { createRandomPicker } from '../lib/random.js';

async function loadCorpus(corpuspath) {
  if (corpuspath) {
    const corpus = await (await fetch(corpuspath)).json();
    return corpus;
  }
  const defaultCorpus = await import('../corpus/data.json');
  return defaultCorpus;
}

window.bullshitGenerator = { generate, createRandomPicker, loadCorpus };

// export {generate, createtRandomPicker, loadCorpus}; // 两种导出方法都可以……评论区似乎说这种不行……
