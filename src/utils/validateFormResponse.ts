import { v } from "@himanshu-sorathiya/omnival";

function validate(fields: [string, string | boolean | number][]) {
	for (const [field, value] of fields) {
		switch (field) {
			case "name": {
				const ans = v
					.string("Enter string value in 'name' field.")
					.minLength(1, "Name should have minimum length of 1.")
					.validate(value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
					};
				}

				break;
			}

			case "value": {
				const ans = v
					.number("Enter number value in 'value' field.")
					.positive("Value must be positive.")
					.validate(+value);

				if (!ans.isValid) {
					return {
						isValid: false,
						error: ans.errors[0]?.message ?? "Invalid Value",
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
