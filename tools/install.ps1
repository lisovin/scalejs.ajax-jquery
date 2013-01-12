param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.ajax-jquery' : 'Scripts/scalejs.ajax-jquery-$($package.Version)',
        'json2' : '../Scripts/json2',
        'jQuery'  : '../Scripts/jquery-1.8.3'
	}" |
	Add-Shims "{
		'json2'			: {
			exports : 'JSON'
		}
	}" |
	Add-ScalejsExtension 'scalejs.ajax-jquery' |
	Out-Null