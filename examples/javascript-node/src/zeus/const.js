/* eslint-disable */

export const AllTypesProps = {
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	SpecialSkills: "enum",
	createCard:{
		Defense:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		skills:{
			type:"SpecialSkills",
			array:true,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		Children:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		Attack:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Card:{
		attack:{
			cardID:{
				type:"String",
				array:true,
				arrayRequired:true,
				required:true
			}
		}
	},
	Mutation:{
		addCard:{
			card:{
				type:"createCard",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	}
}

export const ReturnTypes = {
	EffectCard:{
		effectSize:"Float",
		name:"String"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
	},
	Nameable:{
		"...on EffectCard": "EffectCard",
		"...on CardStack": "CardStack",
		"...on Card": "Card",
		"...on SpecialCard": "SpecialCard",
		name:"String"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Subscription:{
		deck:"Card"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		image:"String",
		name:"String",
		skills:"SpecialSkills"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	}
}