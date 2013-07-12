param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.ajax-jquery, formdata' |
	Remove-ScalejsExtension 'scalejs.ajax-jquery' |
	Out-Null
