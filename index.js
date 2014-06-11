var dictionary = [
    {find: /``/g, replace: "“"},    	// left double quotes (do before single quote)
    {find: /''/g, replace: "”"},    	// right double quotes (do before single quote)
    {find: /`/g,  replace: "‘"},    	// left single quote
    {find: /'/g,  replace: "’"},    	// right single quote
    {find: /\.\.\./g,  replace: "…"},  	// ellipses
    {find: /---/g,  replace: "—"},  	// em dash (do before en dash)
    {find: /--/g,  replace: "–"},   	// en dash (do before hyphen)
    {find: /-/g,  replace: "‐"}     	// hyphen (do before hyphen)
];

module.exports = {
    hooks: {
        "page:before": function(page) {
			var content = page.content;
            for (var i = 0, len = dictionary.length; i<len; i++) {
                content = content.replace(dictionary[i].find, dictionary[i].replace);
            }
			page.content = content;
            return page;
        }
    }
};
