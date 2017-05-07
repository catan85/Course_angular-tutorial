export class AccountService {
	accounts = [
		{
			name: 'test 1',
			status: 'active'
		},
		{
			name: 'test 2',
			status: 'inactive'
		}
	]

	addAccount(name: string, status: string){
		this.accounts.push({name: name, status :status});
	}

	updateStatus(id: number, status: string){
		this.accounts[id].status = status;
	}
}
