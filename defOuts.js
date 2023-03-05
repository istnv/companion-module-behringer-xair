export const defOuts = [
	{
		'id': 'main',
		'digits': 1,
		'min': 1,
		'max': 2,
		'srcAmt': 10,
		'description': 'Main/Phones Outs',
		'hasPos': false,
		'srcs': ['LR', 'Mon', 'UOut'],
	},
	{
		'id': 'aux',
		'digits': 1,
		'min': 1,
		'max': 6,
		'srcAmt': 55,
		'description': 'Aux Outs',
		'hasPos': true,
		'srcs': ['Ch', 'Aux', 'FxRtn', 'Bus', 'FxSnd', 'L', 'R', 'UOut'],
	},
	{
		'id': 'p16',
		'digits': 2,
		'min': 1,
		'max': 16,
		'srcAmt': 55,
		'description': 'P16 Outs',
		'hasPos': true,
		'srcs': ['Ch', 'Aux', 'FxRtn', 'Bus', 'FxSnd', 'L', 'R', 'UOut'],
	},
	{
		'id': 'usb',
		'digits': 2,
		'min': 1,
		'max': 16,
		'srcAmt': 37,
		'description': 'USB sends Outs',
		'hasPos': true,
		'srcs': ['Ch', 'Aux', 'FxRtn', 'Bus', 'FxSnd', 'L', 'R'],
	},
]