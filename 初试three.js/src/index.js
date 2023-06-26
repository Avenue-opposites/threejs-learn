//创建一个场景
const scene = new THREE.Scene();

//窗口的宽高
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

//创建一个透视摄像机(PerspectiveCamera)
const camera = new THREE.PerspectiveCamera(
    75,//视野角度（FOV）
    windowWidth / windowHeight,//长宽比
    0.1,//近截面（near）,当物体比近截面近将不会渲染
    1000//远截面（far）,当物体比远截面远将不会渲染
);

//坐标辅助器
const axesHelper = new THREE.AxesHelper(4);//参数为坐标轴长度

//创建一个webGL渲染器
const renderer = new THREE.WebGLRenderer();
//创建一个材质加载器
// const materialLoader = new THREE.MaterialLoader();
//创建一个纹理加载器
const textureLoader = new THREE.TextureLoader();
//木质纹理
const woodTexture = textureLoader.load("../materials/wood.jpg");
//创建立方体
const geometry = new THREE.BoxGeometry(1, 1, 1);
//材质配置
const materialOptions = { color: "#c5a16f", map: woodTexture };
//创建材质
const material = new THREE.MeshBasicMaterial(materialOptions);
//合成网格
const cube = new THREE.Mesh(geometry, material);


//设置渲染器尺寸
renderer.setSize(windowWidth, windowHeight);

//添加到场景中
scene.add(cube);
scene.add(axesHelper);
//设置相机坐标
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 5;

//将渲染元素挂载到页面上,还需要最后一步渲染才能看到结果
mount(renderer.domElement);


// renderer.render(scene,camera);/* 渲染,调用一次就是一帧 */

animate();
//持续渲染函数
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01; /* x轴旋转 */
    // cube.rotation.y += 0.01; /* y轴旋转 */
    cube.rotation.z += 0.1; /* z轴旋转 */
    renderer.render(scene, camera);/* 渲染,调用一次就是一帧 */
}

function mount(element) {
    document.body.appendChild(element);
};