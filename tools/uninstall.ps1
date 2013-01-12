param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.ajax-jquery' $project.Name |
	Remove-ScalejsExtension 'scalejs.ajax-jquery' |
	Out-Null
