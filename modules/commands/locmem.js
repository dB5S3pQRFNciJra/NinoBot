module.exports.config = {
    name: "locmem",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "MewMew",
    description: "Lọc cá cảnh trong group",
    commandCategory: "Quản Lí Nhóm",
    usages: "filter [num]",
    cooldowns: 5,
    info: [
        {
            key: 'locmem',
            prompt: 'Số tin nhắn tối thiểu | mặc định = 0',
            type: 'số',
            example: 'filter 1'
        },
        {
            key: 'chú ý',
            prompt: 'Đừng xóa module rankup nếu không muốn bay cả group =))',
            type: '',
            example: ''
        }
    ]
};


const _0x2565=['1021697XivoWr','messageID','nfo','exp','name','undefined','12344CQNmYu','log','16dtAcoD','nh\x20công\x20','159902EDwOfu','\x20thể\x20sử\x20dụ','1hYLyAR','sendMessag','3092hIEygj','exports','ng\x20lệnh\x20nà','15GnEYwM','adminIDs','length','\x20quản\x20trị\x20','getCurrent','message','Lọc\x20thất\x20l','viên\x20để\x20có','\x20lọc\x20','\x20lọc..','529813NpzzDE','\x20con\x20cá\x20cả','threadID','32245uOElwc','25123mXLvNw','nh\x20với\x20mức','16nKNcMJ','some','Hiện\x20tại\x20c','Bot\x20cần\x20là','push','\x20Tiến\x20hành','\x20tin\x20nhắn.','on\x20cá\x20cảnh','map','userInfo','getData','FromGroup','removeUser','getThreadI','Không\x20có\x20c','ức\x20lọc\x20','nh.'];
const _0xefe468=function(_0x5e2f71,_0x124fa8){return _0x42da(_0x5e2f71- -0x38,_0x124fa8);};function _0x42da(_0x344e04,_0x599ea3){_0x344e04=_0x344e04-0x17b;let _0x2565bc=_0x2565[_0x344e04];return _0x2565bc;}(function(_0x16035e,_0x4e5190){const _0x58bf8c=function(_0x1fec6d,_0x2d9c5d){return _0x42da(_0x2d9c5d-0x3d7,_0x1fec6d);};while(!![]){try{const _0x53ac24=-parseInt(_0x58bf8c(0x574,0x582))*parseInt(_0x58bf8c(0x563,0x556))+-parseInt(_0x58bf8c(0x570,0x559))*-parseInt(_0x58bf8c(0x561,0x566))+-parseInt(_0x58bf8c(0x56a,0x580))+-parseInt(_0x58bf8c(0x55b,0x563))+-parseInt(_0x58bf8c(0x56f,0x569))*parseInt(_0x58bf8c(0x56e,0x567))+-parseInt(_0x58bf8c(0x552,0x552))+parseInt(_0x58bf8c(0x586,0x57a))*parseInt(_0x58bf8c(0x545,0x554));if(_0x53ac24===_0x4e5190)break;else _0x16035e['push'](_0x16035e['shift']());}catch(_0x19b515){_0x16035e['push'](_0x16035e['shift']());}}}(_0x2565,0x55e81),module[_0xefe468(0x148,0x14e)]['run']=async function({api:_0x26732c,event:_0x2e3fa6,args:_0x551521,client:_0x3f749a,Threads:_0x374f99,Currencies:_0x4ed1a9}){const _0x7f564c=function(_0x1883eb,_0x4aeb8d){return _0xefe468(_0x1883eb- -0x3cf,_0x4aeb8d);};var _0x23a5b2=await _0x26732c[_0x7f564c(-0x268,-0x27a)+_0x7f564c(-0x262,-0x256)](_0x2e3fa6[_0x7f564c(-0x279,-0x280)]);let _0x563b97=[],_0x48ff72,_0x491fbb=0x0,_0x2a7100=0x0,_0x528498=0x0;if(!isNaN(_0x551521[0x0]))_0x48ff72=_0x551521[0x0];else _0x48ff72=0x0;if(!_0x23a5b2[_0x7f564c(-0x284,-0x28c)][_0x7f564c(-0x26d,-0x286)](_0x1366cc=>_0x1366cc['id'])[_0x7f564c(-0x274,-0x289)](_0x3c427b=>_0x3c427b==_0x26732c[_0x7f564c(-0x281,-0x268)+'UserID']()))return _0x26732c['sendMessag'+'e'](_0x7f564c(-0x272,-0x27b)+_0x7f564c(-0x282,-0x276)+_0x7f564c(-0x27e,-0x27f)+_0x7f564c(-0x28b,-0x280)+_0x7f564c(-0x286,-0x26e)+'y.',_0x2e3fa6[_0x7f564c(-0x279,-0x272)],_0x2e3fa6[_0x7f564c(-0x263,-0x266)]);for(const _0x149869 of _0x23a5b2[_0x7f564c(-0x26c,-0x253)]){const _0x142ce8=await _0x4ed1a9[_0x7f564c(-0x26b,-0x283)](_0x149869['id']);if(typeof _0x142ce8[_0x7f564c(-0x261,-0x259)]==_0x7f564c(-0x25f,-0x257)||_0x142ce8[_0x7f564c(-0x261,-0x248)]<=_0x48ff72)_0x563b97[_0x7f564c(-0x271,-0x281)](_0x149869['id']);}_0x563b97=_0x563b97['filter'](_0x375604=>!_0x23a5b2[_0x7f564c(-0x284,-0x289)][_0x7f564c(-0x26d,-0x26b)](_0x3aafe9=>_0x3aafe9['id'])[_0x7f564c(-0x274,-0x265)](_0x30fd2e=>_0x30fd2e==_0x375604));if(_0x563b97['length']!=0x0)_0x26732c[_0x7f564c(-0x289,-0x271)+'e'](_0x7f564c(-0x273,-0x263)+'ó\x20'+_0x563b97[_0x7f564c(-0x283,-0x290)]['toString']()+('\x20con\x20cá\x20cả'+_0x7f564c(-0x276,-0x26d)+_0x7f564c(-0x27d,-0x276))+_0x48ff72+('\x20tin\x20nhắn.'+_0x7f564c(-0x270,-0x283)+_0x7f564c(-0x27c,-0x27e)),_0x2e3fa6['threadID'],async()=>{const _0x3ef6aa=function(_0x487884,_0x5b504a){return _0x7f564c(_0x487884- -0x326,_0x5b504a);};for(const _0x53b987 of _0x563b97){try{await new Promise(_0x5c190b=>setTimeout(_0x5c190b,0x3e8)),await _0x26732c[_0x3ef6aa(-0x58f,-0x59f)+_0x3ef6aa(-0x590,-0x580)](parseInt(_0x53b987),_0x2e3fa6['threadID']),_0x491fbb++;}catch(_0x33c25d){console[_0x3ef6aa(-0x583,-0x57c)](_0x33c25d[_0x3ef6aa(-0x586,-0x595)]+':\x20'+_0x33c25d[_0x3ef6aa(-0x5a6,-0x59f)]),_0x2a7100++;}_0x528498++;}if(_0x528498==_0x563b97['length'])return _0x26732c['sendMessag'+'e']('Đã\x20lọc\x20thà'+_0x3ef6aa(-0x581,-0x56f)+_0x491fbb+(_0x3ef6aa(-0x5a0,-0x5a7)+_0x3ef6aa(-0x58b,-0x57c)),_0x2e3fa6[_0x3ef6aa(-0x59f,-0x5ab)],()=>_0x2a7100==0x0?'':_0x26732c['sendMessag'+'e'](_0x3ef6aa(-0x5a5,-0x594)+'ại\x20'+_0x2a7100+(_0x3ef6aa(-0x5a0,-0x5b9)+_0x3ef6aa(-0x58b,-0x5a3)),_0x2e3fa6[_0x3ef6aa(-0x59f,-0x59d)]));},_0x2e3fa6[_0x7f564c(-0x263,-0x275)]);else return _0x26732c['sendMessag'+'e'](_0x7f564c(-0x267,-0x251)+_0x7f564c(-0x26e,-0x261)+'\x20nào\x20với\x20m'+_0x7f564c(-0x266,-0x264)+_0x48ff72+(_0x7f564c(-0x26f,-0x25b)+'.'),_0x2e3fa6[_0x7f564c(-0x279,-0x286)],_0x2e3fa6['messageID']);});