class GlobalState {
	values = $state({
		modal: false,
		dialCode: '',
		isDarkMode: false
	});

	update(data: any) {
		this.values = { ...this.values, ...data };
	}
}

export const s = new GlobalState();
