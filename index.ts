import VK_API = require('vk-io');
const {VK} = VK_API;
const vk = new VK({
  token: 'токен',
});

vk.updates.on('wall_post', async (context)=>{
  const g = context.wall;
  return g;
});
