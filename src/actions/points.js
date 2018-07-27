export const awardPoints = (team, value) => ({
    type: 'AWARD_POINTS',
    name: team,
    value
})

export const revokePoints = (team, value) => ({
    type: 'REVOKE_POINTS',
    name: team,
    value
})

export const noPoints = () => ({
    type: 'NO_POINTS'
})