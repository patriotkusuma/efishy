<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ReportPakanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_pakan' => '1',
            'sisa'  => fake()->numberBetween(0, 100),
            'jumlah_keluar'=>fake()->numberBetween(0,1000),
            'keterangan' => fake()->paragraph(),

        ];
    }
}
