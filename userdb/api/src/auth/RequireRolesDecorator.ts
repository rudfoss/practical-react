import { Reflector } from "@nestjs/core"
import { DECORATORS } from "@nestjs/swagger/dist/constants"

import { UserDatabaseRole } from "../models"

/**
 * Ensure that user has at least one of the specified roles.
 */
export const RequireRolesDecorator = Reflector.createDecorator<UserDatabaseRole[]>()

/**
 * Ensure that only users with one or more of the specified roles can access the endpoint. By default it also updates the OpenAPI description of the endpoint and adds the roles to the end.
 * **Note:** To ensure descriptions are updated correctly add this decorator above the `ApiOperation` decorator.
 * @param roles
 * @returns
 */
export const RequireRoles =
	(
		roles: UserDatabaseRole[],
		{ updateOpenApiDescription = true }: { updateOpenApiDescription?: boolean } = {}
	): MethodDecorator =>
	(target, propertyKey, descriptor) => {
		if (updateOpenApiDescription && descriptor.value) {
			const existing: { description?: string } = Reflect.getMetadata(
				DECORATORS.API_OPERATION,
				descriptor.value
			) ?? {
				description: ""
			}
			existing.description = `${
				existing.description ?? ""
			}\n\nUser must have one of these roles: **${roles.join(", ")}**`
			Reflect.defineMetadata(DECORATORS.API_OPERATION, existing, descriptor.value)
		}
		RequireRolesDecorator(roles)(target, propertyKey, descriptor)
	}
