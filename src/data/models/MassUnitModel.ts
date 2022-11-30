export default class MassUnitModel{
    id: number = 0
    description: string = ''
    abbreviation: string = ''
    displayText = `${this.description} (${this.abbreviation})`
}