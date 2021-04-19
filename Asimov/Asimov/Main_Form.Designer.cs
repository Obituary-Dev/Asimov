
namespace Asimov
{
    partial class Main_Form
    {
        /// <summary>
        /// Variable nécessaire au concepteur.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Nettoyage des ressources utilisées.
        /// </summary>
        /// <param name="disposing">true si les ressources managées doivent être supprimées ; sinon, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Code généré par le Concepteur Windows Form

        /// <summary>
        /// Méthode requise pour la prise en charge du concepteur - ne modifiez pas
        /// le contenu de cette méthode avec l'éditeur de code.
        /// </summary>
        private void InitializeComponent()
        {
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.profilTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.profTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.matiereTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.notesTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.classesTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.eleveTS_MenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(192)))), ((int)(((byte)(128)))));
            this.menuStrip1.Font = new System.Drawing.Font("Segoe UI", 16F);
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.profilTS_MenuItem,
            this.profTS_MenuItem,
            this.matiereTS_MenuItem,
            this.notesTS_MenuItem,
            this.classesTS_MenuItem,
            this.eleveTS_MenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Padding = new System.Windows.Forms.Padding(10, 6, 0, 6);
            this.menuStrip1.RenderMode = System.Windows.Forms.ToolStripRenderMode.Professional;
            this.menuStrip1.Size = new System.Drawing.Size(764, 46);
            this.menuStrip1.TabIndex = 0;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // profilTS_MenuItem
            // 
            this.profilTS_MenuItem.Name = "profilTS_MenuItem";
            this.profilTS_MenuItem.Size = new System.Drawing.Size(75, 34);
            this.profilTS_MenuItem.Text = "Profil";
            // 
            // profTS_MenuItem
            // 
            this.profTS_MenuItem.Name = "profTS_MenuItem";
            this.profTS_MenuItem.Size = new System.Drawing.Size(127, 34);
            this.profTS_MenuItem.Text = "Professeur";
            // 
            // matiereTS_MenuItem
            // 
            this.matiereTS_MenuItem.Name = "matiereTS_MenuItem";
            this.matiereTS_MenuItem.Size = new System.Drawing.Size(100, 34);
            this.matiereTS_MenuItem.Text = "Matière";
            // 
            // notesTS_MenuItem
            // 
            this.notesTS_MenuItem.Name = "notesTS_MenuItem";
            this.notesTS_MenuItem.Size = new System.Drawing.Size(82, 34);
            this.notesTS_MenuItem.Text = "Notes";
            // 
            // classesTS_MenuItem
            // 
            this.classesTS_MenuItem.Name = "classesTS_MenuItem";
            this.classesTS_MenuItem.Size = new System.Drawing.Size(94, 34);
            this.classesTS_MenuItem.Text = "Classes";
            // 
            // eleveTS_MenuItem
            // 
            this.eleveTS_MenuItem.Name = "eleveTS_MenuItem";
            this.eleveTS_MenuItem.Size = new System.Drawing.Size(76, 34);
            this.eleveTS_MenuItem.Text = "Élève";
            // 
            // Main_Form
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(764, 491);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Main_Form";
            this.Text = "Main Page";
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem profilTS_MenuItem;
        private System.Windows.Forms.ToolStripMenuItem profTS_MenuItem;
        private System.Windows.Forms.ToolStripMenuItem matiereTS_MenuItem;
        private System.Windows.Forms.ToolStripMenuItem notesTS_MenuItem;
        private System.Windows.Forms.ToolStripMenuItem classesTS_MenuItem;
        private System.Windows.Forms.ToolStripMenuItem eleveTS_MenuItem;
    }
}

