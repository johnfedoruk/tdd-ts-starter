System.register(["./hello-world"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_world_1, hw;
    return {
        setters: [
            function (hello_world_1_1) {
                hello_world_1 = hello_world_1_1;
            }
        ],
        execute: function () {
            hw = new hello_world_1.HelloWorld("world");
            try {
                document.querySelector("main").innerHTML = hw.sayHello();
            }
            catch (e) {
                console.warn(e);
            }
            ;
        }
    };
});
//# sourceMappingURL=bootstrap.js.map