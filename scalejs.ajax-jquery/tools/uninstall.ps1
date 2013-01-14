param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.ajax-jquery' |
	Remove-ScalejsExtension 'scalejs.ajax-jquery' |
	Out-Null
