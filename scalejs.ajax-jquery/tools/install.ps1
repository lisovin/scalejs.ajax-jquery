param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'scalejs.ajax-jquery' : 'Scripts/scalejs.ajax-jquery-$($package.Version)'
	}" |
	Add-ScalejsExtension 'scalejs.ajax-jquery' |
	Out-Null