# three-3d-text
## 基于three.js 对CSS3DRenderer.js再次封装，
#### 优化结果：
1.创建的文本对象能够被射线检测到，可添加事件。 
2.可和场景物体交替，使文本更具3d效果
#### 缺点：
1.文本不可透明

### 安装：
`npm install three-3d-text --save`

### 引入：
`import { Text3DRenderer, Text3D, Text3DS } from 'three-3d-text'`

### 使用：
```
    //初始化
    const element = document.getElementById('three-view');
    const textRenderer = new Text3DRenderer();
    element.appendChild(textRenderer.domElement);
    textRenderer.setSize(element.clientWidth, element.clientHeight);

    //添加3D文本，
    const dom = document.createElement('div')
    dom.className = 'text3D'
    dom.innerText = 'hello world!'

    let obj = new Text3D(dom, 80, 20) //80, 20分别是文本长宽
    scene.add(obj)

    //添加3DSprite文本
    let dom1 = dom.cloneNode(true)
    let obj1 = new Text3DS(dom1, 80, 20) //80, 20分别是文本长宽
    scene.add(obj1)

    //更新渲染
    animation() {
        ...
        textRenderer.render( scene, camera );
        requestAnimationFrame(this.animation);
    }

    //自适应
    window.onresize = () => {
        ...
        textRenderer.setSize(element.clientWidth, element.clientHeight)
    }
```
### Text3DRenderer继承CSS3DRenderer， 所以基本和CSS3DRenderer渲染一致。

