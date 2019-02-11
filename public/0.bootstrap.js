(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/mech_wasm.js":
/*!***************************!*\
  !*** ../pkg/mech_wasm.js ***!
  \***************************/
/*! exports provided: hash_string, __widl_f_log_1_, __wbindgen_object_drop_ref, __wbindgen_string_new, Core, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hash_string\", function() { return hash_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Core\", function() { return Core; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mech_wasm_bg */ \"../pkg/mech_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nconst u32CvtShim = new Uint32Array(2);\n\nconst uint64CvtShim = new BigUint64Array(u32CvtShim.buffer);\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet cachegetFloat64Memory = null;\nfunction getFloat64Memory() {\n    if (cachegetFloat64Memory === null || cachegetFloat64Memory.buffer !== _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetFloat64Memory = new Float64Array(_mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetFloat64Memory;\n}\n\nfunction getArrayF64FromWasm(ptr, len) {\n    return getFloat64Memory().subarray(ptr / 8, ptr / 8 + len);\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint64Memory = null;\nfunction getUint64Memory() {\n    if (cachegetUint64Memory === null || cachegetUint64Memory.buffer !== _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint64Memory = new BigUint64Array(_mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint64Memory;\n}\n/**\n* @param {string} arg0\n* @returns {BigInt}\n*/\nfunction hash_string(arg0) {\n    const ptr0 = passStringToWasm(arg0);\n    const len0 = WASM_VECTOR_LEN;\n    const retptr = globalArgumentPtr();\n    _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"hash_string\"](retptr, ptr0, len0);\n    return getUint64Memory()[retptr / 8];\n\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_log_1_(arg0) {\n    console.log(getObject(arg0));\n}\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction freeCore(ptr) {\n\n    _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_core_free\"](ptr);\n}\n/**\n*/\nclass Core {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Core.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeCore(ptr);\n    }\n\n    /**\n    * @returns {Core}\n    */\n    static new() {\n        return Core.__wrap(_mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_new\"]());\n    }\n    /**\n    * @param {string} arg0\n    * @returns {void}\n    */\n    compile_code(arg0) {\n        const ptr0 = passStringToWasm(arg0);\n        const len0 = WASM_VECTOR_LEN;\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_compile_code\"](this.ptr, ptr0, len0);\n    }\n    /**\n    * @returns {void}\n    */\n    clear() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_clear\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    pause() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_pause\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    resume() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_resume\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    step_back_one() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_step_back_one\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    step_forward_one() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_step_forward_one\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    display_core() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_display_core\"](this.ptr);\n    }\n    /**\n    * @returns {void}\n    */\n    display_runtime() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_display_runtime\"](this.ptr);\n    }\n    /**\n    * @param {string} arg0\n    * @param {number} arg1\n    * @param {number} arg2\n    * @param {number} arg3\n    * @returns {void}\n    */\n    queue_change(arg0, arg1, arg2, arg3) {\n        const ptr0 = passStringToWasm(arg0);\n        const len0 = WASM_VECTOR_LEN;\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_queue_change\"](this.ptr, ptr0, len0, arg1, arg2, arg3);\n    }\n    /**\n    * @returns {void}\n    */\n    process_transaction() {\n        return _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_process_transaction\"](this.ptr);\n    }\n    /**\n    * @param {BigInt} arg0\n    * @param {BigInt} arg1\n    * @returns {Float64Array}\n    */\n    get_column(arg0, arg1) {\n\n        uint64CvtShim[0] = arg0;\n        const low0 = u32CvtShim[0];\n        const high0 = u32CvtShim[1];\n\n\n        uint64CvtShim[0] = arg1;\n        const low1 = u32CvtShim[0];\n        const high1 = u32CvtShim[1];\n\n        const retptr = globalArgumentPtr();\n        _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"core_get_column\"](retptr, this.ptr, low0, high0, low1, high1);\n        const mem = getUint32Memory();\n        const rustptr = mem[retptr / 4];\n        const rustlen = mem[retptr / 4 + 1];\n\n        const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();\n        _mech_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 8);\n        return realRet;\n\n    }\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/mech_wasm.js?");

/***/ }),

/***/ "../pkg/mech_wasm_bg.wasm":
/*!********************************!*\
  !*** ../pkg/mech_wasm_bg.wasm ***!
  \********************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, __wbg_core_free, core_new, core_compile_code, core_clear, core_pause, core_resume, core_step_back_one, core_step_forward_one, core_display_core, core_display_runtime, core_queue_change, core_process_transaction, core_get_column, hash_string, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./mech_wasm */ \"../pkg/mech_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/mech_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mech_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mech-wasm */ \"../pkg/mech_wasm.js\");\n\r\n\r\nlet mech_core = mech_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Core\"].new();\r\n\r\nlet balls = Object(mech_wasm__WEBPACK_IMPORTED_MODULE_0__[\"hash_string\"])(\"ball\");\r\nlet time = 1;\r\n\r\n// ## Controls\r\n\r\nlet controls = document.createElement(\"div\");\r\ncontrols.setAttribute(\"class\", \"controls\");\r\n\r\nlet compile = document.createElement(\"button\");\r\ncompile.setAttribute(\"id\", \"compile\");\r\ncompile.innerHTML =  \"Compile\";\r\ncontrols.appendChild(compile);\r\n\r\nlet view_core = document.createElement(\"button\");\r\nview_core.setAttribute(\"id\", \"view core\");\r\nview_core.innerHTML =  \"View Core\";\r\ncontrols.appendChild(view_core);\r\n\r\nlet view_runtime = document.createElement(\"button\");\r\nview_runtime.setAttribute(\"id\", \"view runtime\");\r\nview_runtime.innerHTML =  \"View Runtime\";\r\ncontrols.appendChild(view_runtime);\r\n\r\nlet clear_core = document.createElement(\"button\");\r\nclear_core.setAttribute(\"id\", \"clear core\");\r\nclear_core.innerHTML =  \"Clear Core\";\r\ncontrols.appendChild(clear_core);\r\n\r\nlet toggle_core = document.createElement(\"button\");\r\ntoggle_core.setAttribute(\"id\", \"toggle core\");\r\ntoggle_core.innerHTML =  \"Pause\";\r\ncontrols.appendChild(toggle_core);\r\n\r\nlet step_back = document.createElement(\"button\");\r\nstep_back.setAttribute(\"id\", \"step back\");\r\nstep_back.innerHTML =  \"Step Back\";\r\ncontrols.appendChild(step_back);\r\n\r\nlet step_forward = document.createElement(\"button\");\r\nstep_forward.setAttribute(\"id\", \"step forward\");\r\nstep_forward.innerHTML =  \"Step Forward\";\r\ncontrols.appendChild(step_forward);\r\n\r\nlet start_timer = document.createElement(\"button\");\r\nstart_timer.setAttribute(\"id\", \"start timer\");\r\nstart_timer.innerHTML =  \"Start Timer\";\r\ncontrols.appendChild(start_timer);\r\n\r\nlet txn = document.createElement(\"button\");\r\ntxn.setAttribute(\"id\", \"txn\");\r\ntxn.innerHTML =  \"Add Txn\";\r\n\r\n// ## Editor\r\n\r\nlet editor = document.createElement(\"div\");\r\neditor.setAttribute(\"class\", \"editor\");\r\n\r\nlet code = document.createElement(\"textarea\");\r\ncode.setAttribute(\"class\", \"code\");\r\ncode.setAttribute(\"id\", \"code\");\r\ncode.innerHTML =  `# Bouncing Balls\r\n\r\nDefine the environment\r\n  #html/event/click = [|x y|]\r\n  range = 1:5\r\n  x = range * 30\r\n  v = x * 0\r\n  #ball = [|x y vx vy| x x v v]\r\n  #system/timer = [resolution: 15, tick: 0]\r\n  #gravity = 1\r\n  #boundary-y = 820\r\n  #boundary-x = 500\r\n\r\n## Update condition\r\n\r\nUpdate the block positions on each tick of the timer\r\n  ~ #system/timer.tick\r\n  #ball.x := #ball.x + #ball.vx\r\n  #ball.y := #ball.y + #ball.vy\r\n  #ball.vy := #ball.vy + #gravity\r\n\r\n## Boundary Condition\r\n\r\nKeep the balls within the y boundary\r\n  ~ #system/timer.tick\r\n  iy = #ball.y > #boundary-y\r\n  #ball.y{iy} := #boundary-y\r\n  #ball.vy{iy} := -#ball.vy * 0.80\r\n\r\nKeep the balls within the x boundary\r\n  ~ #system/timer.tick\r\n  ix = #ball.x > #boundary-x\r\n  ixx = #ball.x < 0\r\n  #ball.x{ix} := #boundary-x\r\n  #ball.x{ixx} := 0\r\n  #ball.vx{ix | ixx} := -#ball.vx * 0.80\r\n\r\n## Create More Balls\r\n\r\nCreate ball at click point\r\n  ~ #html/event/click.x\r\n  x = #html/event/click.x\r\n  y = #html/event/click.y\r\n  #ball += [x: x, y: y, vx: 30, vy: 0]`;\r\n\r\nlet canvas = document.createElement(\"canvas\");\r\ncanvas.setAttribute(\"class\", \"canvas\");\r\ncanvas.setAttribute(\"id\", \"drawing area\");\r\ncanvas.setAttribute(\"width\", \"500\");\r\ncanvas.setAttribute(\"height\", \"820\");\r\ncanvas.style.backgroundColor = 'rgb(226, 79, 94)';\r\n\r\neditor.appendChild(code);\r\neditor.appendChild(canvas);\r\n\r\n// ## Container\r\n\r\nlet container = document.createElement(\"div\");\r\ncontainer.setAttribute(\"class\",\"container\");\r\n\r\ncontainer.appendChild(controls);\r\ncontainer.appendChild(editor);\r\n\r\ndocument.body.appendChild(container);\r\n\r\n// ## Event handlers\r\n\r\nfunction system_timer() {\r\n  mech_core.queue_change(\"system/timer\",1,2,time);\r\n  mech_core.process_transaction();\r\n  time = time + 1;\r\n  render();\r\n}\r\n\r\nfunction render() {\r\n  //render\r\n  let canvas = document.getElementById(\"drawing area\");\r\n  let context = canvas.getContext(\"2d\");\r\n  context.clearRect(0, 0, canvas.width, canvas.height);\r\n\r\n  let radius = 10;\r\n  let x = mech_core.get_column(balls,BigInt(1));\r\n  let y = mech_core.get_column(balls,BigInt(2));\r\n\r\n  let i;\r\n  for (i = 0; i < x.length; i++) {\r\n    let centerY = Number(y[i]);\r\n    let centerX = Number(x[i]);\r\n    context.beginPath();\r\n    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\r\n    context.fillStyle = 'black';\r\n    context.fill();\r\n    context.lineWidth = 1;\r\n    context.strokeStyle = '#000000';\r\n    context.stroke();\r\n  }\r\n}\r\n\r\ndocument.getElementById(\"compile\").addEventListener(\"click\", function(click) {\r\n  console.log(click);\r\n  let code = document.getElementById(\"code\");\r\n  mech_core.compile_code(code.value);\r\n  render();\r\n});\r\n\r\ndocument.getElementById(\"drawing area\").addEventListener(\"click\", function(click) {\r\n  console.log(click.layerX, click.layerY);\r\n  mech_core.queue_change(\"html/event/click\",1,1,click.layerX);\r\n  mech_core.queue_change(\"html/event/click\",1,2,click.layerY);\r\n  mech_core.process_transaction();\r\n  render();\r\n});\r\n\r\ndocument.getElementById(\"view core\").addEventListener(\"click\", function() {\r\n  mech_core.display_core();\r\n});\r\n\r\ndocument.getElementById(\"view runtime\").addEventListener(\"click\", function() {\r\n  mech_core.display_runtime();\r\n});\r\n\r\ndocument.getElementById(\"clear core\").addEventListener(\"click\", function() {\r\n  mech_core.clear();\r\n  render();\r\n});\r\n\r\ndocument.getElementById(\"step back\").addEventListener(\"click\", function() {\r\n  mech_core.step_back_one();\r\n  render();\r\n});\r\n\r\ndocument.getElementById(\"step forward\").addEventListener(\"click\", function() {\r\n  mech_core.step_forward_one();\r\n  render();\r\n});\r\n\r\ndocument.getElementById(\"toggle core\").addEventListener(\"click\", function() {\r\n  let toggle_core = document.getElementById(\"toggle core\");\r\n  let state = toggle_core.innerHTML;\r\n  if (state == \"Resume\") {\r\n    mech_core.resume();\r\n    toggle_core.innerHTML = \"Pause\";\r\n  } else {\r\n    mech_core.pause();\r\n    toggle_core.innerHTML = \"Resume\";\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"start timer\").addEventListener(\"click\", function() {\r\n  setInterval(system_timer, 16);\r\n});\r\n\r\n/*document.getElementById(\"txn\").addEventListener(\"click\", function() {\r\n  mech_core.process_transaction(\"test\",1,1,3);\r\n});*/\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);