const config = {
    ICONS: {
        NAME: `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path>
        </svg>
        `,
        BIRTHDAY: `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
        </svg>
        `,
        ADDRESS: `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"></path>
        </svg>
        `,
        MAIL: `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 14 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path>
        </svg>
        `,
        UNIVERSITY: `
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8.11 2.8a.34.34 0 0 0-.2 0L.27 5.18a.35.35 0 0 0 0 .67L2 6.4v1.77c-.3.17-.5.5-.5.86 0 .19.05.36.14.5-.08.14-.14.31-.14.5v2.58c0 .55 2 .55 2 0v-2.58c0-.19-.05-.36-.14-.5.08-.14.14-.31.14-.5 0-.38-.2-.69-.5-.86V6.72l4.89 1.53c.06.02.14.02.2 0l7.64-2.38a.35.35 0 0 0 0-.67L8.1 2.81l.01-.01zM4 8l3.83 1.19h-.02c.13.03.25.03.36 0L12 8v2.5c0 1-1.8 1.5-4 1.5s-4-.5-4-1.5V8zm3.02-2.5c0 .28.45.5 1 .5s1-.22 1-.5-.45-.5-1-.5-1 .22-1 .5z"></path>
        </svg>
        `,
    },
    LOGOS: {
        JAVASCRIPT: `
        <svg viewBox="0 0 128 128">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
        </svg>
        `,
        HTML: `
        <svg viewBox="0 0 128 128">
            <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"></path><path fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
        </svg>
        `,
        CSS: `
        <svg viewBox="0 0 128 128">
            <path fill="#131313" d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"></path><path fill="#fff" d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"></path>
        </svg>
        `,
        JQUERY: `
        <svg viewBox="0 0 128 128">
            <path fill="#0868AC" d="M27.758 20.421c-7.352 10.565-6.437 24.312-.82 35.54l.411.798.263.506.164.291.293.524c.174.307.353.612.536.919l.306.504c.203.326.41.65.622.973l.265.409c.293.437.592.872.901 1.301l.026.033.152.205c.267.368.542.732.821 1.093l.309.393c.249.313.502.623.759.934l.29.346c.345.406.698.812 1.057 1.208l.021.022.041.045c.351.383.71.758 1.075 1.133l.344.347c.282.284.569.563.858.841l.351.334c.387.364.777.722 1.176 1.07l.018.016.205.174c.351.305.708.605 1.068.902l.442.353c.294.235.591.468.89.696l.477.361c.33.243.663.482.999.717l.363.258.101.072c.318.22.645.431.97.642l.42.28c.5.315 1.007.628 1.519.93l.42.237c.377.217.756.431 1.14.639l.631.326.816.424.188.091.334.161c.427.204.858.405 1.293.599l.273.122c.498.218 1.001.427 1.508.628l.368.144c.469.182.945.359 1.423.527l.179.062c.524.184 1.054.353 1.587.52l.383.114c.542.164 1.079.358 1.638.462 35.553 6.483 45.88-21.364 45.88-21.364-8.674 11.3-24.069 14.28-38.656 10.962-.553-.125-1.089-.298-1.628-.456l-.406-.124a44.793 44.793 0 01-1.568-.51l-.215-.077a49.537 49.537 0 01-1.382-.513l-.388-.152c-.501-.198-1-.405-1.492-.62l-.298-.133a55.398 55.398 0 01-1.259-.585l-.364-.175c-.327-.159-.65-.328-.974-.495l-.649-.341c-.395-.21-.782-.43-1.167-.654l-.394-.219a58.203 58.203 0 01-1.52-.932l-.41-.273a40.515 40.515 0 01-1.081-.719l-.349-.245a54.203 54.203 0 01-1.022-.738l-.453-.343c-.31-.237-.618-.476-.922-.721l-.411-.33c-.388-.318-.771-.64-1.149-.969l-.126-.105a54.797 54.797 0 01-1.208-1.098l-.34-.328a33.158 33.158 0 01-.868-.851l-.34-.34c-.362-.37-.717-.745-1.065-1.126l-.053-.057a41.973 41.973 0 01-1.08-1.229l-.283-.336a44.66 44.66 0 01-.777-.961l-.285-.355a52.469 52.469 0 01-.898-1.195c-8.098-11.047-11.008-26.283-4.535-38.795m17.081-1.626c-5.316 7.65-5.028 17.893-.88 25.983a33.747 33.747 0 002.351 3.925c.796 1.143 1.68 2.501 2.737 3.418.383.422.784.834 1.193 1.238l.314.311c.397.385.801.764 1.218 1.132l.05.043.012.012c.462.405.939.794 1.423 1.178l.323.252c.486.372.981.738 1.489 1.087l.043.033.68.447.322.213c.363.233.73.459 1.104.676l.156.092c.322.185.648.367.975.545l.347.18.682.354.103.047c.469.23.941.453 1.424.663l.314.13c.386.163.775.323 1.167.473l.5.184c.356.132.712.253 1.072.373l.484.155c.511.158 1.017.359 1.549.448 27.45 4.547 33.787-16.588 33.787-16.588-5.712 8.228-16.775 12.153-28.58 9.089a34.726 34.726 0 01-1.555-.449l-.467-.151a29 29 0 01-1.087-.374l-.491-.183a38.673 38.673 0 01-1.171-.473l-.315-.133a32.78 32.78 0 01-1.432-.666l-.718-.365-.414-.213c-.306-.166-.61-.338-.909-.514l-.217-.123a30.75 30.75 0 01-1.1-.672l-.332-.221-.712-.472a37.364 37.364 0 01-1.484-1.085l-.334-.264c-5.167-4.079-9.263-9.655-11.21-15.977-2.041-6.557-1.601-13.917 1.935-19.891m14.847-.518c-3.134 4.612-3.442 10.341-1.267 15.435 2.293 5.407 6.992 9.648 12.477 11.66l.682.235.3.096c.323.102.644.22.978.282 15.157 2.929 19.268-7.777 20.362-9.354-3.601 5.185-9.653 6.43-17.079 4.627a18.837 18.837 0 01-1.796-.555 22.303 22.303 0 01-2.134-.886 22.19 22.19 0 01-3.741-2.282c-6.645-5.042-10.772-14.659-6.436-22.492"></path><path fill="#131B28" d="M66.359 96.295h-4.226a.556.556 0 00-.517.417l-1.5 6.94-1.5 6.94a.554.554 0 01-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085.066-.354.012-.066.135-.72.145-.771.154-.785.682-3.332.683-3.332a.336.336 0 00-.341-.419h-4.337a.55.55 0 00-.514.418l-.933 4.424-.932 4.425-.002.006-.086.412c-1.074 4.903-.79 9.58 5.048 9.727l.17.003h9.163a.554.554 0 00.516-.417l1.976-9.289 1.976-9.29c.049-.23-.103-.417-.338-.418zm-45.256-.049h-4.64a.562.562 0 00-.521.416l-.44 1.942-.44 1.942c-.051.229.098.416.333.416h4.676a.556.556 0 00.518-.417l.425-1.941.425-1.941c.049-.229-.101-.417-.336-.417zm-1.346 6.044H15.08a.563.563 0 00-.521.416l-.657 2.91-.656 2.909-.183.834-.631 2.97-.63 2.971c-.049.229-.15.599-.225.821 0 0-.874 2.6-2.343 2.57l-.184-.004-1.271-.023h-.001a.558.558 0 00-.524.407l-.485 2.039-.484 2.038c-.055.228.093.416.326.42.833.01 2.699.031 3.828.031 3.669 0 5.604-2.033 6.843-7.883l1.451-6.714 1.361-6.297c.049-.227-.103-.415-.337-.415zm86.117-1.574l-.194-.801-.191-.82-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004-3.472-.005h-3.907a.552.552 0 00-.515.417l-.173.816-.204.964-.057.271-1.759 8.24-1.67 7.822c-.05.23-.066.512-.038.626.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099.627-3.1.001-.005.084-.413.76-3.56.671-3.144a.555.555 0 01.515-.417l11.089-.005c.235.002.383-.185.33-.414zm14.275-7.24l-.854.003h-3.549a.904.904 0 00-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533a.562.562 0 00-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987a.58.58 0 00.532-.413l.986-3.833a2.52 2.52 0 01.363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zm-40.086 9.919v-.004a.514.514 0 01-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015-.004.002.003-.021.029-.109c.611-1.624 1.855-2.69 4.194-2.69 2.634-.001 3.148 1.285 2.969 2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033a.553.553 0 00.509-.42l.344-1.681.067-.327.41-2.006a.335.335 0 00-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181H84.18l-.001.001.008-.001a.503.503 0 00.445-.315l.029-.106-.001.001c1.813-6.839 1.293-11.445-6.474-11.446zm-38.81 7.358l-.116.409v.001l-.922 3.268-.922 3.267a.596.596 0 01-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166.901-4.368 2.668-7.083 6.312-7.358 4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585-8.306 0-11.914 5.981-13.29 12.484-1.376 6.55.427 12.293 8.686 12.246l6.516-.024 6.089-.022a.59.59 0 00.534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zm41.12-3.741a.28.28 0 11-.56.001.28.28 0 01.56-.001z"></path>
        </svg>
        `,
        BOOTSTRAP: `
        <svg viewBox="0 0 128 128">
            <defs><linearGradient id="bootstrap-original-wordmark-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 2.051) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" offset="0"></stop><stop stop-color="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-wordmark-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" offset="0"></stop><stop stop-color="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-wordmark-c" x="161.9" y="135.46" width="197" height="249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 15.15c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.563-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-wordmark-a)"></path><path transform="translate(1.494 -10.359) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-wordmark-b)" filter="url(#bootstrap-original-wordmark-c)" stroke="#fff"></path><text x="9.073" y="121.431" fill="#7952b3" font-family="'Segoe UI'" font-size="25.333" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;line-height:1.25"><tspan x="9.073" y="121.431" style="font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal">Bootstrap</tspan></text>
        </svg>
        `,
        FIGMA: `
        <svg viewBox="0 0 128 128">
            <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
        </svg>
        `,
        GIT: `
        <svg viewBox="0 0 128 128">
            <path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zm13.332-9.04c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997V56.785c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929H92.563v-.001zm33.857-1.93c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011V55.7c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7L29.951 38.952a3.355 3.355 0 00-4.744 0l-4.724 4.724 5.991 5.992a3.983 3.983 0 014.1.956 3.988 3.988 0 01.947 4.125l5.775 5.775a3.988 3.988 0 014.125 6.593 3.992 3.992 0 01-6.516-4.342l-5.386-5.386-.001 14.174a3.992 3.992 0 011.056 6.401 3.993 3.993 0 11-4.339-6.518V57.141a3.99 3.99 0 01-2.167-5.236l-5.906-5.908L2.563 61.595a3.356 3.356 0 000 4.747L25.312 89.09a3.357 3.357 0 004.746 0L52.7 66.446a3.355 3.355 0 000-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143H1.58z"></path>
        </svg>
        `,
        VUEJS:`
        <svg viewBox="0 0 128 128">
            <path d="M32.191 97.953a1.91 1.91 0 00-1.055.316c-.319.211-.611.575-.611 1.041 0 .062-.036.2.084.44l-.031-.076 6.41 20.797c.115.39.39.688.7.86s.648.235.978.235c.7 0 1.47-.334 1.705-1.088v-.002l6.404-20.875v-.076c0 .106.031.045.031-.183 0-.475-.303-.824-.627-1.043a1.966 1.966 0 00-1.101-.346c-.49 0-1.052.297-1.24.863l-.004.006-5.17 17.254-5.19-17.223c-.077-.308-.284-.565-.525-.709s-.504-.191-.758-.191zm51.055 1.072c-1.02 0-1.88.782-1.88 1.76s.846 1.787 1.88 1.787c1.014 0 1.82-.824 1.82-1.787s-.82-1.76-1.82-1.76zm-15.029 6.658c-3.488 0-6.361 2.792-6.361 6.147v3.438c0 1.879.748 3.49 2.02 4.601 1.27 1.112 3.044 1.727 5.077 1.727 1.502 0 2.727-.337 3.602-.793.438-.229.79-.485 1.049-.764.26-.28.45-.585.45-.967 0-.35-.134-.654-.353-.927-.218-.273-.562-.524-1.006-.524-.32 0-.566.135-.779.266-.213.13-.413.275-.654.414-.482.277-1.12.547-2.248.547-1.256 0-2.302-.358-3.024-.96-.72-.6-1.14-1.435-1.14-2.529v-.636h6.435c.687 0 1.45 0 2.11-.42.66-.422 1.06-1.26 1.06-2.533 0-3.53-2.944-6.086-6.238-6.086zm24.186 0c-1.854 0-3.218.6-4.094 1.502-.876.902-1.254 2.076-1.254 3.172 0 1.398.565 2.4 1.373 3.041.809.643 1.815.966 2.772 1.254.957.289 1.873.545 2.488.924.615.38.945.789.945 1.654 0 .465-.14.835-.517 1.137-.378.303-1.05.541-2.143.541-1.293 0-2.016-.319-2.543-.644-.263-.163-.475-.332-.693-.483s-.466-.314-.813-.314c-.417 0-.725.257-.912.523a1.546 1.546 0 00-.295.897c0 .405.198.761.477 1.07.28.309.657.584 1.121.824.927.48 2.204.815 3.72.815 1.647 0 3.001-.402 3.96-1.182.958-.78 1.48-1.939 1.48-3.275 0-1.51-.549-2.595-1.357-3.313-.809-.717-1.83-1.087-2.801-1.385-.971-.297-1.906-.529-2.531-.855-.626-.326-.92-.627-.92-1.32 0-.375.15-.847.531-1.22.381-.371 1.003-.673 2.037-.673.826 0 1.44.19 1.932.39.246.101.46.206.662.294.203.087.39.173.658.173.485 0 .818-.32 1.016-.617.198-.297.312-.59.312-.926 0-.42-.261-.718-.55-.94s-.653-.402-1.073-.556c-.84-.308-1.912-.507-2.988-.507zm-43.857.186c-.811 0-1.512.509-1.512 1.266v8.193c0 3.324 2.826 6.268 6.33 6.268 3.446 0 6.33-2.91 6.33-6.268v-8.223c0-.378-.208-.707-.482-.916-.274-.208-.622-.32-1-.32s-.728.11-1.008.315c-.28.204-.504.53-.504.921v8.223c0 1.742-1.518 3.428-3.336 3.428-1.847 0-3.335-1.716-3.335-3.428v-8.193c0-.393-.215-.695-.48-.91s-.615-.356-1.003-.356zm34.701 0c-.38 0-.73.098-1.01.309-.28.21-.47.558-.47.927v15.096c0 1.133-.08 2.083-.329 2.659-.248.575-.542.83-1.38.83-.741 0-1.36.647-1.36 1.422 0 .321.104.675.367.95s.672.438 1.145.438c1.594 0 2.814-.707 3.54-1.855.728-1.149 1.01-2.685 1.01-4.444v-15.096c0-.393-.224-.735-.51-.937a1.723 1.723 0 00-1.003-.299zm-15.061 2.473c1.991 0 3.336 1.667 3.336 3.365 0 .185-.02.306-.04.361-.018.055-.016.048-.044.067-.055.036-.363.115-.951.115H64.85v-.666c0-1.777 1.485-3.242 3.336-3.242zm9.512 9.37c-1.088 0-1.912.9-1.912 1.942 0 1 .812 1.912 1.912 1.912 1.042 0 1.88-.884 1.88-1.912 0-1.067-.852-1.941-1.88-1.941z" fill="#35495e" style="block-progression:tb;isolation:auto;mix-blend-mode:normal;solid-color:#000;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-transform:none;white-space:normal"></path><path fill="none" d="M9.106 0l42.76.136 12.151 20.988L76.396.136 118.893 0 64.142 94.469zm108.912.546L97.124.564 64.123 57.218 31.14.564 9.914.547 64.13 93.086zM96.448.54l-19.51.143-12.91 21.14L51.319.683 31.769.54 64.13 55.841zM31.403.394L51.133.4l12.896 21.407L76.88.403 96.592.398 64.128 56.71"></path><path fill="#35495e" d="M31.404.394L51.133.4l12.896 21.407L76.88.403 96.592.398 64.128 56.71z"></path><path fill="#41b883" d="M9.887.544l21.5-.146 32.722 56.315L96.575.401l21.537.023-54.007 92.684z"></path>
        </svg>
        `,
    },
    MY_SKILLS: [
        'HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'JQUERY', 'VUEJS', 'GIT'
    ],
    MY_PROJECTS: [
        {
            TITLE: "TODO LIST",
            INFO: "TODO LIST 관리를 지원하는 웹페이지입니다.",
            LINK: "https://github.com/hubintheroot/todoList",
            IMG_PATH: "./src/imgs/todoList_img.jpg",
            USE_SKILLS: ['HTML', 'CSS', 'JAVASCRIPT'],
        },
        {
            TITLE: "월급 계산기",
            INFO: "근로시간을 입력받아 주휴수당이 미포함된 월급 계산기를 제공하는 웹페이지입니다.",
            LINK: "https://github.com/hubintheroot/salary-calculator",
            IMG_PATH: "./src/imgs/salary_calculator_img.jpg",
            USE_SKILLS: ['HTML', 'CSS', 'VUEJS'],
        },
        {
            TITLE: "이터널리턴 로테이션",
            INFO: "게임 이터널리턴의 랭크 검색 및 로테이션 캐릭터 정보를 제공하는 웹서비스입니다.",
            LINK: "https://github.com/hubintheroot/EternalReturn",
            IMG_PATH: "./src/imgs/eternalReturn_rotation_img.jpg",
            USE_SKILLS: ['HTML', 'CSS', 'JAVASCRIPT'],
        },
        {
            TITLE: "포트폴리오",
            INFO: "포트폴리오 웹페이지입니다.",
            LINK: "https://github.com/hubintheroot/portfolio",
            IMG_PATH: "./src/imgs/portfolio_img.jpg",
            USE_SKILLS: ['HTML', 'CSS', 'JAVASCRIPT'],
        },
    ],
};

export default config;