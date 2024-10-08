import type { PluginItem } from "@babel/core"

export function removeAttributePluginBabel(): PluginItem {
	return {
		visitor: {
			Program(path, state: { opts?: { props?: string[] } }) {
				const forbidden = state?.opts?.props || []

				path.traverse({
					JSXIdentifier(current) {
						const nodeName = current.node.name
						if (forbidden.includes(nodeName)) {
							current.parentPath.remove()
						}
					}
				})
			}
		}
	}
}
