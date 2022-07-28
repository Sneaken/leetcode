import SDK from '@yuque/sdk';
import { yuqueConfig } from './config.js';

const client = new SDK(yuqueConfig);

const { users, groups, repos, docs } = client;

const currentUser = await users.get();
const login = currentUser.login;
// const list = await docs.list({namespace: 'eurus/nkllon'})
// const doc = await docs.get({namespace: 'eurus/nkllon', slug: 'xu7y4e'})
const doc = await docs.get({ namespace: 'lingchensandianban/redkt8', slug: 'vp7okc' });
console.log('doc =>', doc);
await docs.update({
  namespace: 'lingchensandianban/redkt8',
  id: doc.id,
  slug: doc.slug,
  data: '',
  _force_asl: 1,
});
