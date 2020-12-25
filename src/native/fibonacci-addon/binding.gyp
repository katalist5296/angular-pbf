{
  "targets": [
    {
      "target_name": "fibonacci-addon",
      "cflags!": [ "-fno-exceptions" ],
      "cflags_cc!": [ "-fno-exceptions" ],
      "sources": [ "main.cc" ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    },
    {
       "target_name": "action_after_build",
       "type": "none",
       "dependencies": [
         "fibonacci-addon"
       ],
       "copies": [
         {
           "files": [
             "<(PRODUCT_DIR)/fibonacci-addon.node"
           ],
           "destination": "../../../native-addons"
         }
       ]
     }
  ]
}
