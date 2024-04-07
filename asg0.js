function main() {
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
} 

function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    var v1 = new Vector3([document.getElementById('x1').value, document.getElementById('y1').value, 0])
    var v2 = new Vector3([document.getElementById('x2').value, document.getElementById('y2').value, 0])
    function drawVector(v, color) {
        ctx.beginPath()
        ctx.moveTo(200,200);
        ctx.lineTo(200+ v.elements[0]*20, 200 - v.elements[1]*20);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    drawVector(v1, "red");
    drawVector(v2, "blue")
}

function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 
    var v1 = new Vector3([document.getElementById('x1').value, document.getElementById('y1').value, 0])
    var v2 = new Vector3([document.getElementById('x2').value, document.getElementById('y2').value, 0])
    function drawVector(v, color) {
        ctx.beginPath()
        ctx.moveTo(200,200);
        ctx.lineTo(200+ v.elements[0]*20, 200 - v.elements[1]*20);
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    drawVector(v1, "red");
    drawVector(v2, "blue")
    var selector = document.getElementById('operation').value
    if (selector == "Add") {
        var v3 = v1.add(v2)
        drawVector(v3, "green")
    }
    if (selector == "Subtract") {
        var v3 = v1.sub(v2)
        drawVector(v3, "green")
    }
    if (selector == "Multiply") {
        var s = document.getElementById('scalar').value
        var v3 = v1.mul(s)
        var v4 = v2.mul(s)
        drawVector(v3, "green")
        drawVector(v4, "green")
    }
    if (selector == "Divide") {
        var s = document.getElementById('scalar').value
        var v3 = v1.div(s)
        var v4 = v2.div(s)
        drawVector(v3, "green")
        drawVector(v4, "green")
    }
    if (selector == "Magnitude") {
        console.log(v1.magnitude())
        console.log(v2.magnitude())
    }
    if (selector == "Normalize") {
        var v3 = v1.normalize()
        var v4 = v2.normalize()
        drawVector(v3, "green")
        drawVector(v4, "green")
    }
    if (selector == "Angle between") {
        console.log(angleBetween(v1, v2))
    }
    if (selector == "Area") {
        console.log(areaTriangle(v1, v2))
    }
}

function angleBetween(v1, v2) {
    var s = Vector3.dot(v1, v2)
    return (Math.acos(s/(v1.magnitude()*v2.magnitude()))*180)/Math.PI
}

function areaTriangle(v1, v2) {
    var v3 = Vector3.cross(v1, v2)
    return v3.magnitude()/2
}