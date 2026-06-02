import { v } from "@himanshu-sorathiya/omnival";

function validate(fields: [string, string | boolean | number][]) {
	for (const [field, value] of fields) {
		switch (field) {
			case "name": {
				const ans = v
					.string()
					.minLength(1, "Name should have minimum length of 1")
					.validate(value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
					};
				}

				return { isValid: true, error: "" };
			}

			case "value": {
				const ans = v
					.number()
					.positive("Value must be positive.")
					.validate(value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
					};
				}

				return { isValid: true, error: "" };
			}

			default:
				return {
					isValid: false,
					error: `Unexpected field : ${field}`,
				};
		}
	}

	return {
		isValid: false,
		error: `Unexpected Error`,
	};
}

export { validate };
