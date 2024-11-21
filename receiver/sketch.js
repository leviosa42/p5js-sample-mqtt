const TOPIC = "test-topic";
// MQTT Broker 接続するURL
// ローカルでホストして別端末からアクセスする場合は、
// localhost の部分をホストしているPCのIPアドレスに変更する
const MQTT_URL = "ws://localhost:1884";

let client;
let connected = false;
let data;

function setup() {
    createCanvas(400, 400);

    client = mqtt.connect(MQTT_URL, {
        clientId: "receiver" + Math.random().toString(16).substring(2, 8),
    });

    // MQTT Broker に接続した時の処理
    client.on("connect", () => {
        console.log("接続完了");
        connected = true;
        background('color');
        client.subscribe(TOPIC);
    });

    // TOPIC にメッセージが届いた時の処理
    client.on("message", (topic, message, packet) => {
        data = JSON.parse(message); // 受信したメッセージを JSON としてパース
    });
}

function draw() {
    if(!connected) return; // 接続完了していない場合は何もしない
    background('cyan');
    if(data) { // データが受信されている場合
        text(`x: ${data.x}, y: ${data.y}`, 10, 10);
        text(`lag[msec]: ${Date.now() - data.time}`, 10, 20);
        if(data.mouseIsPressed) {
            ellipse(data.x, data.y, 30, 30);
        } else {
            ellipse(data.x, data.y, 10, 10);
        }
    }
    text(`fps: ${frameRate().toFixed(0)}`, 10, 30);
    
}