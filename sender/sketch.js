// MQTT Broker 接続するURL
// ローカルでホストして別端末からアクセスする場合は、
// localhost の部分をホストしているPCのIPアドレスに変更する
const MQTT_URL = "ws://localhost:1884";
const TOPIC = "test-topic";

let client;
let connected = false;
let clicked = false;
let data = {};

function setup() {
    createCanvas(400, 400);
    client = mqtt.connect(MQTT_URL, {
        // clientId はユニークでなければならない
        clientId: "sender" + Math.random().toString(16).substring(2, 8),
    });

    // MQTT Broker に接続した時の処理
    client.on("connect", () => {
        console.log("接続完了");
        connected = true; // 接続完了フラグを立てる
        // TOPIC を購読する
        // client.subscribe(TOPIC);
    });

    // TOPIC にメッセージが届いた時の処理
    client.on("message", (topic, message, packet) => {
        console.log(`受信 ${topic}: ${message}`);
    });
}

function draw() {
    if(!connected) return; // 接続完了していない場合は何もしない
    background('green');

    data.x = mouseX;
    data.y = mouseY;
    data.time = Date.now();
    data.mouseIsPressed = mouseIsPressed;
    client.publish(TOPIC, JSON.stringify(data));
    text(`x: ${mouseX}, y: ${mouseY}`, 10, 10);
    text(`fps: ${frameRate().toFixed()}`, 10, 20); // toFixed(n) で小数点以下 n 桁まで丸める
    if (mouseIsPressed) {
        ellipse(mouseX, mouseY, 30, 30);
    } else {
        ellipse(data.x, data.y, 10, 10);
    }
}
