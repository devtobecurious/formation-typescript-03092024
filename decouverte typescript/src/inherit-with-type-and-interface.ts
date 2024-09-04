// ------ AVEC INTERFACES -------------

export interface Weapon {
    strength: number
}

const weapon: Weapon = {
    strength: 100
}

export interface WithDamage {
    damage: number
}

export interface WeaponWithDamage extends Weapon, WithDamage {
}

const weapon2: WeaponWithDamage = {
    strength: 100,
    damage: 10
}

// ------ AVEC TYPES -------------
export type WeaponT = {
    strength: number
}

const weaponT: WeaponT = {
    strength: 100
}

export type WithDamageT = {
    damage: number
}

export type WeaponWithDamageT = WeaponT & WithDamageT

const weapon2T: WeaponWithDamageT = {
    strength: 100,
    damage: 10
}
