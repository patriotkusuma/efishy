<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pakan>
 */
class PakanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => 1,
            'nama'  => fake()->name(),
            'harga' => fake()->numberBetween(1000,30000),
            'jumlah'=> fake()->numberBetween(1000,5000),
            'keterangan' => fake()->paragraph(),
        ];
    }
}
