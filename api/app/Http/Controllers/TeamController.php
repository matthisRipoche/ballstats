<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    // Récupérer toutes les teams
    public function index()
    {
        return response()->json(Team::with('coach')->get());
    }

    public function show($id)
    {
        $team = Team::with('coach')->find($id);

        if (!$team) {
            return response()->json(['message' => 'Team non trouvé'], 404);
        }

        return response()->json($team);
    }

    // Supprimer une team
    public function destroy($id)
    {
        $team = Team::find($id);
        if (!$team) {
            return response()->json(['message' => 'Team non trouvé'], 404);
        }
        $team->delete();
        return response()->json(['message' => 'Team supprimé avec succès']);
    }

    public function update(Request $request, $id)
    {
        try {
            $team = Team::find($id);

            if (!$team) {
                return response()->json(['message' => 'Équipe non trouvée'], 404);
            }

            // Validation des données
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
            ]);

            // Mise à jour de l'équipe
            $team->update($validatedData);

            return response()->json([
                'message' => 'Équipe mise à jour avec succès',
                'team' => $team
            ], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erreur lors de la mise à jour', 'error' => $e->getMessage()], 500);
        }
    }

    // Créer un nouvel utilisateur
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $team = Team::create([
            'name' => $request->name,
            'coach' => 1,
        ]);

        return response()->json($team, 201);
    }
}
