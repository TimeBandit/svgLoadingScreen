## Displaying Loading Screens to Waiting Users

I came across an issue where I was having to wait a second or two for my app to load, in the meantime I was looking at a blank page. I don't think it's healthy to expect a user to look at a blank screen while your app gets up, gets dressed and leaves for work 2 seconds late.

The solution was to give the user an animation to watch while it loaded. This short tutorial will show you how to do that using SVG images. The same method can be adapted to use CSS loaders.

1. Download and unzip the repo from [here](https://github.com/TimeBandit/svgLoadingScreen)
2. Run <code>meteor</code> from the root folder of the unzipped file.
3. See it in action at <code>http://localhost:3000/</code>

If you intend to adapt the code for your own project you need to add this package;  [meteorhacks:inject-initial](https://atmospherejs.com/meteorhacks/inject-initial), which will give you an 'API to modify the initial HTML sent by Meteor to the client.'. You also need to remove autopublish with <code>meteor remove autopublish</code>

Place any loading screen svg files you have inside of <code>public/svg-loaders</code>. The ones supplied with this code sample were provided by [Sam Herbert](http://samherbert.net/svg-loaders/)

All code is commented but the key files to examine are:

- <code>/private/spinner.html</code>
- <code>/public/svg-loaders</code>
- <code>svgLoader.html</code>
- <code>svgLoader.js</code>
- <code>svgLoader.css</code>

The finished example can be found [here](http://svgloadingscreen.meteor.com/) Enjoy :)
