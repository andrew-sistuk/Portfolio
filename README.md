# Main changes

## Settings

1. eslint.config.js

    ``` 
    rules: {
       ...
       "react/prop-types": 0,
       ...
       }
    ```

2. vite.config.js
    ```
    ...
    build: {
        sourcemap: true,
    }
    ...
    ```
3. vercel.json

   ```
   {
       "rewrites":  [
           {"source": "/(.*)", "destination": "/"}
       ]
   }
   
   ```
## Libraries
   
1. clsx
2. modern-normalize
3. react-icons
4. yup
5. formik
6. axios
7. react-router-dom
8. reduxjs/toolkit
9. react-redux
10. react-hook-form

## Code

1. main.jsx
   ```
      import 'modern-normalize';
   ```

2. delete App.css
3. [.prettierrc.json](.prettierrc.json)
4. fix index.css
5. add reset.css
6. and add structure folders
7. add jsconfig.js


## Future features

1) add package-lock.json to .gitignore