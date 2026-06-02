function validate(fields: [string, string | boolean | number][]) {
	for (const [field, value] of fields) {
		switch (field) {
			case "name": {
				if (!value) {
					return {
						isValid: false,
						error: 'Enter value inside "name" field.',
					};
				}

				if (typeof value !== "string") {
					return {
						isValid: false,
						error: 'Enter string value in "name" field.',
					};
				}

				if (value.length <= 1) {
					return {
						isValid: false,
						error: "Name should have minimum length of 1.",
					};
				}

				break;
			}

			case "value": {
				if (!value) {
					return {
						isValid: false,
						error: 'Enter value inside "value" field.',
					};
				}

				if (
					typeof value !== "string"
					|| Object.is(NaN, +value)
					|| !Number.isFinite(+value)
				) {
					return {
						isValid: false,
						error: "Value must be a number.",
					};
				}

				if (+value <= 0) {
					return {
						isValid: false,
						error: "Value must be positive.",
					};
				}

				break;
			}

			default:
				return {
					isValid: false,
					error: `Unexpected field : ${field}`,
				};
		}
	}

	return { isValid: true, error: "" };
}

export { validate };
