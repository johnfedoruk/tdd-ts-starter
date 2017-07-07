System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HelloWorld;
    return {
        setters: [],
        execute: function () {
            HelloWorld = (function () {
                function HelloWorld(name) {
                    this.name = name;
                }
                HelloWorld.prototype.sayHello = function () {
                    var greeting = "Hello, " + this.name + "!";
                    return greeting;
                };
                return HelloWorld;
            }());
            exports_1("HelloWorld", HelloWorld);
        }
    };
});
//# sourceMappingURL=hello-world.js.map