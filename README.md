<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <meta charset="UTF-8">
</head>
<body>
<div class="container">
    <h1 class="header">API Basejump: Image Search Abstraction Layer</h1>
    <p>By Steve M Song</p>
    <blockquote>User Stories:
        <ol>
            <li>I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
            </li>
            <li>I can paginate through the responses by adding a ?offset=2 parameter to the URL.</li>
            <li>I can get a list of the most recently submitted search strings.</li>
        </ol>
    </blockquote>
    <h2>example usage:</h2>
    <code>https://api-image-search.herokuapp.com/api/imagesearch/english%20bulldog?offset=10</code><br>
    <code>https://api-image-search.herokuapp.com/api/latest/imagesearch</code>
    <h2>example query output:</h2>
    <code>[{"id":"2d1f43ae-4800-43f6-acc6-295af3761e5c","title":"ENGLISH BULLDOGS","url":"http://1.bp.blogspot.com/-xhB210WmXWw/TuLp-3zr9zI/AAAAAAAAFn0/7VK6bodmn8c/s1600/Bulldog.jpg","sourceUrl":"http://piperbasenji.blogspot.com/2011/12/english-bulldogs.html","displayUrl":"piperbasenji.blogspot.com/2011/12/english-bulldogs.html","width":1024,"height":768,"size":189451,"type":"image/jpeg","thumbnail":{"url":"http://ts4.mm.bing.net/th?id=OIP.M525ae532a55c569711d5c954168a7773H0&pid=15.1","type":"image/jpg","width":300,"height":225,"size":11771}},{"id":"9f82baf3-3e20-4e50-b3e5-22a8f5d1078a","title":"English-Bulldog-Puppy - American Bully And Bulldog Upliftment Blog","url":"http://www.bullytree.com/wp-content/uploads/2013/12/English-Bulldog-Puppy.jpg","sourceUrl":"http://www.bullytree.com/american-bully-and-bulldog-pictures/english-bulldog-puppy-4/","displayUrl":"www.bullytree.com/american-bully-and-bulldog-pictures/english...","width":1280,"height":1024,"size":162871,"type":"image/jpeg","thumbnail":{"url":"http://ts4.mm.bing.net/th?id=OIP.Mc2df51b6942d5c9953d8e1f7f8196df6H0&pid=15.1","type":"image/jpg","width":300,"height":240,"size":7103}},{"id":"62c2b0e7-72bc-477e-b7fe-e32dfe64832c","title":"Cute Puppy Dogs: cute english bulldog puppies","url":"http://1.bp.blogspot.com/-UTyCJubySvg/UORAh8k4GvI/AAAAAAAAQoE/ZaQqNvtgg0I/s1600/Cute-English-Bulldog-Puppies-1.jpg","sourceUrl":"http://cute-puppy-dog-pics.blogspot.com.es/2013/01/cute-english-bulldog-puppies.html","displayUrl":"cute-puppy-dog-pics.blogspot.com.es/2013/01/cute-english-bulldog...","width":1500,"height":1000,"size":890095,"type":"image/jpeg","thumbnail":{"url":"http://ts2.mm.bing.net/th?id=OIP.Mbf5be300494a28b8fffdf52ae281a2ffH0&pid=15.1","type":"image/jpg","width":300,"height":200,"size":7097}},{"id":"7aafff2d-6953-482c-bca5-a909c11da3ef","title":"English Bulldog - Wooftown","url":"http://wooftown.com/wp-content/uploads/2011/03/English-Bulldog1.jpg","sourceUrl":"http://wooftown.com/breeds/english-bulldog-photo-needed/","displayUrl":"wooftown.com/breeds/english-bulldog-photo-needed","width":748,"height":642,"size":505856,"type":"image/jpeg","thumbnail":{"url":"http://ts1.mm.bing.net/th?id=OIP.M35c16c7bba40217a85fb8eb97dba4aa5H0&pid=15.1","type":"image/jpg","width":480,"height":411,"size":28329}},{"id":"92fa7517-8f5a-4c58-aa6d-db9be908bb46","title":"English Bulldog","url":"http://4.bp.blogspot.com/-9wtWxvLTgBs/UZe-62wprzI/AAAAAAAAARA/8_IzmcG68-4/s1600/english-bulldog-looking.jpg","sourceUrl":"http://dogbreeds4.blogspot.com/2013/05/english-bulldog.html","displayUrl":"dogbreeds4.blogspot.com/2013/05/english-bulldog.html","width":1200,"height":834,"size":103242,"type":"image/jpeg","thumbnail":{"url":"http://ts4.mm.bing.net/th?id=OIP.Maabcd446ad2f7d4b502eb97be8440417H0&pid=15.1","type":"image/jpg","width":300,"height":208,"size":5492}},{"id":"245c4971-2222-4fdf-8367-f2c3d9b8dae1","title":"English Bulldog","url":"http://images.nationalgeographic.com/wpf/media-live/photos/000/347/custom/34765_1600x1200-wallpaper-cb1303240827.jpg","sourceUrl":"http://animals.nationalgeographic.com/wallpaper/animals/photos/your-dog-pictures/close-english-bulldog/","displayUrl":"animals.nationalgeographic.com/wallpaper/animals/photos/your-dog...","width":1600,"height":1200,"size":144454,"type":"image/jpeg","thumbnail":{"url":"http://ts1.mm.bing.net/th?id=OIP.M150bdfb0aafe10eb2160052db5e1d7f0H0&pid=15.1","type":"image/jpg","width":300,"height":225,"size":6487}},{"id":"3186ebf3-c7db-40a9-ba87-2e3de97ec6a9","title":"... in the English Bulldog category for similar ads. - Hoobly Classifieds","url":"http://pics.hoobly.com/big/WXFYhUpNY0.jpg","sourceUrl":"http://www.hoobly.com/0/0/1459535.html","displayUrl":"www.hoobly.com/0/0/1459535.html","width":1200,"height":800,"size":56645,"type":"image/jpeg","thumbnail":{"url":"http://ts3.mm.bing.net/th?id=OIP.Mfa74a8e7cfc417081e78d80501cc1b98H0&pid=15.1","type":"image/jpg","width":300,"height":200,"size":6755}},{"id":"b276c571-4842-492f-a7ea-ec5d2539afcc","title":"... miniature english bulldog puppy white miniature english bulldog black","url":"http://www.101dogbreeds.com/wp-content/uploads/2015/01/White-Miniature-English-Bulldog-Puppy.jpg","sourceUrl":"http://www.101dogbreeds.com/miniature-english-bulldog.asp","displayUrl":"www.101dogbreeds.com/miniature-english-bulldog.asp","width":1024,"height":890,"size":198692,"type":"image/jpeg","thumbnail":{"url":"http://ts2.mm.bing.net/th?id=OIP.Mddd305bb4900b9029489e641abf29a84o0&pid=15.1","type":"image/jpg","width":300,"height":260,"size":11513}},{"id":"9877eabd-64aa-4497-aefe-d93da8ea0afb","title":"English Bulldog X | Free Images at Clker.com - vector clip art online ...","url":"http://www.clker.com/cliparts/0/4/7/8/13142981359244831english_bulldog_1024x768.jpg","sourceUrl":"http://www.clker.com/clipart-141572.html","displayUrl":"www.clker.com/clipart-141572.html","width":1024,"height":768,"size":85852,"type":"image/jpeg","thumbnail":{"url":"http://ts4.mm.bing.net/th?id=OIP.M0478af1db0d871657c68d35d2fe3a633o0&pid=15.1","type":"image/jpg","width":300,"height":225,"size":6670}},{"id":"8ab56d9e-1711-4273-b0e8-ec8c8bd950c5","title":"miniature english bulldog puppies miniature english bulldog puppy ...","url":"http://www.101dogbreeds.com/wp-content/uploads/2015/01/Miniature-English-Bulldog-Puppies.jpg","sourceUrl":"http://www.101dogbreeds.com/miniature-english-bulldog.asp","displayUrl":"www.101dogbreeds.com/miniature-english-bulldog.asp","width":1200,"height":900,"size":360785,"type":"image/jpeg","thumbnail":{"url":"http://ts2.mm.bing.net/th?id=OIP.Mf5fae29a039a6b5762302e73f149c0fao0&pid=15.1","type":"image/jpg","width":300,"height":225,"size":8476}}]</code><br>
    <h2>example latest search output:</h2>
    <code>[{"term":"kobe bryant","when":"7/14/2016, 12:09:26 AM"},{"term":"lol dogs","when":"7/13/2016, 11:02:34 PM"},{"term":"subaru","when":"7/13/2016, 11:02:20 PM"},{"term":"samsung","when":"7/13/2016, 10:57:16 PM"},{"term":"samsung","when":"7/13/2016, 10:57:00 PM"},{"term":"samsung","when":"7/13/2016, 10:56:56 PM"},{"term":"french bulldog","when":"7/13/2016, 10:56:45 PM"},{"term":"bmw","when":"7/13/2016, 10:56:33 PM"},{"term":"steph curry","when":"7/13/2016, 6:03:33 PM"},{"term":"steph curry","when":"7/13/2016, 5:56:34 PM"}]</code><br>
</div>
</body>
</html>
